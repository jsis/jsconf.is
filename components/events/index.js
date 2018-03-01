import React from 'react'
import Event from './event'
import Details from './details'
import { below } from 'react-waypoint'
import closestTo from 'date-fns/closest_to'
import isWithinRange from 'date-fns/is_within_range'
import format from 'date-fns/format'
import Dropdown from '../drop-down'
import moment from 'moment-timezone'
import './index.scss'

const darkPattern = `url(${require('../../images/dark-pattern.png')})`
const localStorageKey = 'jsconf-is-2018-schedule'

function getWeekday(date) {
  return format(date, 'dddd').toLowerCase()
}

function isValidDay(type) {
  return [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ].includes(type)
}

const trackMap = {
  conference: 'Conference',
  so: 'Significant Others',
  lounge: 'Lounge',
}

function isValidType(type) {
  return Object.keys(trackMap).includes(type)
}

const getFromLocalStorage = () => {
  try {
    const existing = window.localStorage.getItem(localStorageKey)
    return JSON.parse(existing) || {}
  } catch (err) {
    return {}
  }
}

function saveToLocalStorage(slugs) {
  try {
    window.localStorage.setItem(localStorageKey, JSON.stringify(slugs))
  } catch (error) {
    console.error(
      "Couldn't save the talk. If you believe some of our code is not working correctly it'd be awesome if you could file an issue at https://git.io/vAw4I",
      error
    )
  }
}

function getCorrectDate(days, today = new Date().setHours(0, 0, 0, 0)) {
  const dates = days.map(({ date }) => date)
  let correctDay = dates[0]
  if (isWithinRange(today, dates[0], dates[days.length - 1])) {
    correctDay = closestTo(today, dates)
  }
  return getWeekday(correctDay)
}

function parseHash(state, { schedule }) {
  const hash = window.location.hash.split('/')
  const type = hash.length > 1 && isValidType(hash[1]) ? hash[1] : state.type

  return {
    type,
    activeDate:
      hash.length > 2 && isValidDay(hash[2])
        ? hash[2]
        : getCorrectDate(schedule[type] || []),
  }
}

function setHash(type, day) {
  window.location.hash = `#!/${type}/${day}`
}

class Events extends React.Component {
  static propTypes = {
    conference: React.PropTypes.arrayOf(React.PropTypes.object),
    schedule: React.PropTypes.object.isRequired,
    footerPosition: React.PropTypes.string,
  }

  constructor(props) {
    super(props)
    const now = moment.tz('Atlantic/Reykjavik').format('ddd MMM DD YYYY HH:mm:ss (z)')
    this.state = {
      savedSlugs: getFromLocalStorage(),
      activeDetails: null,
      type: 'conference',
      now,
      activeDate: getCorrectDate(props.schedule.conference),
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(parseHash, () => {
      const { type, activeDate } = this.state
      setHash(type, activeDate)
    })
    this.intervalTimer = setInterval(this.updateDate, 15 * 60000)
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.footerPosition !== below &&
      nextProps.footerPosition !== this.props.footerPosition
    ) {
      this.setState({ activeDetails: null })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { type, activeDate } = this.state
    if (prevState.activeDate !== activeDate || prevState.type !== type) {
      setHash(type, activeDate)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
    clearInterval(this.intervalTimer)
  }

  onKeyUp = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        this.onPrevious()
        break
      case 39:
        this.onNext()
        break
      default:
        break
    }
  }

  onChangeDay = activeDate => {
    this.setState({
      activeDate,
      activeDetails: null,
    })
  }

  onOpenTrackDetails = details => () => {
    this.setState({ activeDetails: details })
  }

  onPrevious = () => {
    this.navigate(-1)
  }

  onNext = () => {
    this.navigate(1)
  }

  onSave = () => {
    const slot = this.getActiveSlot()
    if (!slot) {
      return
    }

    const slugs = Object.assign({}, this.state.savedSlugs, {
      [slot.slug]: !this.state.savedSlugs[slot.slug],
    })

    this.setState({ savedSlugs: slugs }, () => {
      saveToLocalStorage(slugs)
    })
  }

  onChangeTracks = track => {
    this.setState((state, props) => ({
      type: track,
      activeDate: getCorrectDate(this.getActiveSchedule(state, props)),
    }))
  }

  getActiveSchedule(state = this.state, props = this.props) {
    const { type } = state
    const { schedule } = props

    if (!schedule.hasOwnProperty(type)) {
      return []
    }

    return schedule[type]
  }

  getActiveSlot() {
    if (!this.state.activeDetails) {
      return null
    }
    const { day, slot, track } = this.state.activeDetails
    const schedule = this.getActiveSchedule()
    return schedule[day].slots[slot].tracks[track]
  }

  updateDate = () => {
    this.setState({
      now: new Date(),
    })
  }

  calculateNextTrack(direction, indicies) {
    const { activeDetails } = this.state
    const current = indicies || { ...activeDetails }
    const days = this.getActiveSchedule()
    const slots = days[current.day].slots
    const tracks = slots[current.slot].tracks

    current.track += direction

    if (current.track >= tracks.length) {
      current.slot += direction
      current.track = -1

      if (!slots[current.slot]) {
        return activeDetails
      }

      return this.calculateNextTrack(direction, current)
    }

    if (current.track < 0) {
      current.slot += direction

      if (!slots[current.slot]) {
        return activeDetails
      }

      current.track = slots[current.slot].tracks.length
      return this.calculateNextTrack(direction, current)
    }

    if (tracks[current.track].grayed) {
      return this.calculateNextTrack(direction, current)
    }

    return current
  }

  navigate(direction) {
    if (this.state.activeDetails) {
      this.setState({
        activeDetails: this.calculateNextTrack(direction),
      })
    }
  }

  render() {
    const { type, activeDate, activeDetails, savedSlugs } = this.state
    const schedule = this.getActiveSchedule()
    const weekdays = schedule.map(({ date }) => getWeekday(date))

    const hasDetails = !!activeDetails
    let talk = {}

    if (hasDetails) {
      const { day, slot, track } = activeDetails
      talk = schedule[day].slots[slot].tracks[track]
      talk.time = schedule[day].slots[slot].time
    }

    return (
      <div className="Events">
        <div
          className="Events-pattern"
          style={{
            backgroundImage: darkPattern,
            transform: `rotate(${type === 'so' ? -67 : -37}deg)`,
          }}
        />
        <div
          className="Events-pattern"
          style={{
            backgroundImage: darkPattern,
            transform: `rotate(${type === 'so' ? 56 : 37}deg)`,
          }}
        />
        <nav className={`Events-tabs${!hasDetails ? ' is-centered' : ''}`}>
          <h2 className="Events-title">
            <strong>Schedule</strong>
          </h2>
          <div className="Events-filters">
            <Dropdown
              label="Schedule"
              items={Object.keys(trackMap)}
              active={type}
              titleMap={trackMap}
              onChange={this.onChangeTracks}
            />
            <Dropdown
              label="Day"
              items={weekdays}
              active={activeDate}
              onChange={this.onChangeDay}
            />
          </div>
        </nav>
        <div className={`Events-group${!hasDetails ? ' is-centered' : ''}`}>
          {schedule.map((day, index) => (
            <Event
              key={day.date}
              active={activeDetails}
              isActive={activeDate === getWeekday(day.date)}
              date={format(day.date, 'MMMM Do, YYYY')}
              slots={day.slots}
              index={index}
              savedSlugs={savedSlugs}
              now={this.state.now}
              onOpenTrackDetails={this.onOpenTrackDetails}
            />
          ))}
        </div>
        <Details
          {...talk}
          onNext={this.onNext}
          onPrevious={this.onPrevious}
          onSave={this.onSave}
          onClose={this.onOpenTrackDetails(null)}
          isActive={hasDetails}
          savedSlugs={savedSlugs}
        />
      </div>
    )
  }
}

export default Events
