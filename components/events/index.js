import React from 'react'
import Event from './event'
import Details from './details'
import { below } from 'react-waypoint'
import './index.scss'

class Events extends React.Component {
  static localStorageKey = 'jsconf-is-2016-schedule'

  static propTypes = {
    days: React.PropTypes.arrayOf(React.PropTypes.object),
    other: React.PropTypes.string,
    footerPosition: React.PropTypes.string,
  }

  constructor (props) {
    super(props)
    const now = new Date()
    this.state = {
      activeDetails: null,
      activeDate: new Date('08/25/2016').setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0)
        ? 'Friday'
        : 'Thursday',
    }
  }

  componentWillMount () {
    const days = [...this.props.days]
    let keys = {}

    if (typeof window !== 'undefined') {
      keys = JSON.parse(window.localStorage.getItem(Events.localStorageKey)) || {}
    }

    Object.keys(keys).forEach(slug => {
      dayLoop: for (const day of days) {
        for (const slot of day.slots)  {
          const track = slot.tracks.find(x => x.slug === slug)
          if (track) {
            track.saved = keys[slug]
            break dayLoop
          }
        }
      }
    })

    this.setState({ days, keys })
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.footerPosition !== below && nextProps.footerPosition !== this.props.footerPosition) {
      this.setState({ activeDetails: null })
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
    const record = updatedDays[day].slots[slot].tracks[track];

    record.saved = ! record.saved
    keys[record.slug] = record.saved

    this.setState({ keys, days: updatedDays })
    window.localStorage.setItem(Events.localStorageKey, JSON.stringify(keys))
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
    const { other } = this.props
    const { days, activeDate, activeDetails } = this.state

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
          {days.map(({ date }) => {
            const weekday = date.split(/,?\s+/)[0]
            const classes = `Events-tab${activeDate === weekday ? ' is-active' : ''}`
            return (
              <button key={date} onClick={this.onChangeDay(weekday)} className={classes}>{weekday}</button>
            )
          })}
          <button
            onClick={this.onChangeDay('Other')}
            className={`Events-tab${activeDate === 'Other' ? ' is-active' : ''}`}
          >Community / SO</button>
        </nav>
        <div className={`Events-group${!hasDetails ? ' is-centered' : ''}`}>
          {days.map((day, index) =>
            <Event
              key={day.date}
              active={activeDetails}
              isActive={activeDate === day.date.split(/,?\s+/)[0]}
              date={day.date}
              slots={day.slots}
              index={index}
              onOpenTrackDetails={this.onOpenTrackDetails}
            />
          )}
          <div
            className={`Event${activeDate === 'Other' ? ' is-active' : ''}`}
            dangerouslySetInnerHTML={{ __html: other }}
          />
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
