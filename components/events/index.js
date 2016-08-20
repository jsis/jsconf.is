import React from 'react'
import Event from './event'
import './index.scss'

class Events extends React.Component {
  static propTypes = {
    days: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  constructor (props) {
    super(props)
    const now = new Date()
    this.state = {
      activeDate: new Date('August 25, 2016') === now.setHours(0, 0, 0, 0)
        ? 'Friday'
        : 'Thursday',
    }
  }

  onChangeDay = day => () => {
    this.setState({ activeDate: day })
  }

  render () {
    const { days } = this.props
    const { activeDate } = this.state

    return (
      <div className="Events">
        <nav className="Events-tabs">
          {days.map(({ date }) => {
            const weekday = date.split(/,?\s+/)[0]
            const classes = `Events-tab${activeDate === weekday ? ' is-active' : ''}`
            return (
              <button onClick={this.onChangeDay(weekday)} className={classes}>{weekday}</button>
            )
          })}
        </nav>
        {days.map(day =>
          <Event
            key={day.date}
            active={activeDate === day.date.split(/,?\s+/)[0]}
            date={day.date}
            slots={day.slots}
          />
        )}
      </div>
    )
  }
}

export default Events
