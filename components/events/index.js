import React from 'react'
import Event from './event'
import Details from './details'
import { below } from 'react-waypoint'
import closestTo from 'date-fns/closest_to'
import isWithinRange from 'date-fns/is_within_range'
import format from 'date-fns/format'
import Dropdown from '../drop-down'
import './index.scss'

const darkPattern = `url(${require('../../images/dark-pattern.png')})`

function getWeekday(date) {
  return format(date, 'dddd').toLowerCase()
}

function isValidDay(type) {
  return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(type)
}

const trackMap = {
  conference: 'Conference',
  so: 'Significant Others',
}

function isValidType(type) {
  return Object.keys(trackMap).includes(type)
}

function getCorrectDate(days, today = (new Date()).setHours(0, 0, 0, 0)) {
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
    activeDate: hash.length > 2 && isValidDay(hash[2]) ? hash[2] : getCorrectDate(schedule[type] || []),
  }
}

function setHash(type, day) {
  window.location.hash = `#!/${type}/${day}`
}

class Events extends React.Component {
  static localStorageKey = 'jsconf-is-2018-schedule'

  static propTypes = {
    conference: React.PropTypes.arrayOf(React.PropTypes.object),
    so: React.PropTypes.arrayOf(React.PropTypes.object),
    footerPosition: React.PropTypes.string,
  }

  constructor (props) {
    super(props)
    this.state = {
      activeDetails: null,
      type: 'conference',
      activeDate: getCorrectDate(props.schedule.conference),
    }
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(parseHash, () => {
      const { type, activeDate } = this.state
      setHash(type, activeDate)
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.footerPosition !== below && nextProps.footerPosition !== this.props.footerPosition) {
      this.setState({ activeDetails: null })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { type, activeDate } = this.state
    if (prevState.activeDate !== activeDate || prevState.type !== type) {
      setHash(type, activeDate)
    }
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyUp)
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
    const { activeDetails: { day, slot, track } } = this.state
    const { keys, days } = this.state
    const updatedDays = [...days]
    const record = updatedDays[day].slots[slot].tracks[track]

    record.saved = ! record.saved
    keys[record.slug] = record.saved

    this.setState({ keys, days: updatedDays })
    window.localStorage.setItem(Events.localStorageKey, JSON.stringify(keys))
  }

  onChangeTracks = track => {
    this.setState((state, props) => ({
      type: track,
      activeDate: getCorrectDate(this.getActiveSchedule(state, props)),
    }))
  }

  calculateNextTrack (direction, indicies) {
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

  navigate (direction) {
    if (this.state.activeDetails) {
      this.setState({
        activeDetails: this.calculateNextTrack(direction),
      })
    }
  }

  getActiveSchedule(state = this.state, props = this.props) {    
    const { type, activeDate } = state
    const { schedule } = props
    
    if (!schedule.hasOwnProperty(type)) {
      return []
    }

    return schedule[type]
  }

  render () {
    const { type, activeDate, activeDetails } = this.state
    const schedule = this.getActiveSchedule()
    const weekdays = schedule.map(({ date }) => getWeekday(date))

    const hasDetails = !! activeDetails
    let detailsProps = {}

    if (hasDetails) {
      const { day, slot, track } = activeDetails
      detailsProps = schedule[day].slots[slot].tracks[track]
      detailsProps.time = schedule[day].slots[slot].time
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
          {schedule.map((day, index) =>
            <Event
              key={day.date}
              active={activeDetails}
              isActive={activeDate === getWeekday(day.date)}
              date={format(day.date, 'MMMM Do, YYYY')}
              slots={day.slots}
              index={index}
              onOpenTrackDetails={this.onOpenTrackDetails}
            />
          )}
        </div>
        <Details
          {...detailsProps}
          onNext={this.onNext}
          onPrevious={this.onPrevious}
          onSave={this.onSave}
          onClose={this.onOpenTrackDetails(null)}
          isActive={hasDetails}
        />
      </div>
    )
  }
}

export default Events
