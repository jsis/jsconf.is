import React from 'react'
import Event from './event'
import Details from './details'
import { below } from 'react-waypoint'
import './index.scss'
import closestTo from 'date-fns/closest_to'
import isWithinRange from 'date-fns/is_within_range'
import format from 'date-fns/format'

function getWeekday(date) {
  return format(date, 'dddd').toLowerCase()
}

function isValidDay(type) {
  return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(type)
}

function isValidType(type) {
  return ['conference', 'so'].includes(type)
}

function getCorrectDate(days, today = (new Date()).setHours(0, 0, 0, 0)) {
  const dates = days.map(({ date }) => date)
  let correctDay = dates[0]
  if (isWithinRange(today, dates[0], dates[days.length - 1])) {
    correctDay = closestTo(today, dates)
  }
  return getWeekday(correctDay)
}

function parseHash(state, props) {
  const hash = window.location.hash.split('/')
  const type = hash.length > 1 && isValidType(hash[1]) ? hash[1] : state.type

  return {
    type,
    activeDate: hash.length > 2 && isValidDay(hash[2]) ? hash[2] : getCorrectDate(props[type]),
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
      activeDate: getCorrectDate(props.conference),
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

  onChangeDay = day => () => {
    this.setState({
      activeDetails: null,
      activeDate: day,
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

  onChangeTracks = () => {
    this.setState((state, props) => {
      const type = state.type === 'conference' ? 'so' : 'conference'
      return { type, activeDate: getCorrectDate(props[type]) }
    })
  }

  calculateNextTrack (direction, indicies) {
    const { activeDetails } = this.state
    const current = indicies || { ...activeDetails }

    const { days } = this.state

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

  render () {
    const { so, conference } = this.props
    const { type, activeDate, activeDetails } = this.state

    const days = type === 'conference'
      ? conference
      : so

    if (!days) {
      return null
    }

    const hasDetails = !! activeDetails
    let detailsProps = {}

    if (hasDetails) {
      const { day, slot, track } = activeDetails
      detailsProps = days[day].slots[slot].tracks[track]
      detailsProps.time = days[day].slots[slot].time
    }

    return (
      <div className="Events" onKeyPress={this.onKeyPress}>
        <nav className={`Events-tabs${!hasDetails ? ' is-centered' : ''}`}>
          <h1 className="Page-title">
            <strong>Schedule:</strong> {type === 'conference' ? 'Conference' : 'Significant Other'}
          </h1>
          <p>
            <button onClick={this.onChangeTracks}>
              View {type === 'conference' ? 'Significant Other' : 'Conference'} tracks
            </button>
          </p>
          {days.map(({ date }) => {
            const weekday = getWeekday(date)
            const classes = `Events-tab${activeDate === weekday ? ' is-active' : ''}`
            return (
              <button key={date} onClick={this.onChangeDay(weekday)} className={classes}>
                {weekday}
              </button>
            )
          })}
        </nav>
        <div className={`Events-group${!hasDetails ? ' is-centered' : ''}`}>
          {days.map((day, index) =>
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
