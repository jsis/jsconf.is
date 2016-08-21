import React from 'react'
import Event from './event'
import Details from './details'
import './index.scss'

class Events extends React.Component {
  static propTypes = {
    days: React.PropTypes.arrayOf(React.PropTypes.object),
    other: React.PropTypes.string,
  }

  constructor (props) {
    super(props)
    const now = new Date()
    this.state = {
      activeDetails: null,
      activeDate: new Date('August 25, 2016') === now.setHours(0, 0, 0, 0)
        ? 'Friday'
        : 'Thursday',
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

  render () {
    const { days, other } = this.props
    const { activeDate, activeDetails } = this.state
    const details = activeDetails || {}

    return (
      <div className="Events">
        <nav className={`Events-tabs${!activeDetails ? ' is-centered' : ''}`}>
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
        <div className={`Events-group${!activeDetails ? ' is-centered' : ''}`}>
          {days.map(day =>
            <Event
              key={day.date}
              active={activeDetails}
              isActive={activeDate === day.date.split(/,?\s+/)[0]}
              date={day.date}
              slots={day.slots}
              onOpenTrackDetails={this.onOpenTrackDetails}
            />
          )}
          <div
            className={`Event${activeDate === 'Other' ? ' is-active' : ''}`}
            dangerouslySetInnerHTML={{ __html: other }}
          />
        </div>
        <Details {...details} onClose={this.onOpenTrackDetails(null)} isActive={!!activeDetails} />
      </div>
    )
  }
}

export default Events
