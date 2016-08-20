import React from 'react'
import Slot from './slot'
import './event.scss'

const Event = ({ date, active, slots }) => (
  <div className={`Event${active ? ' is-active' : ''}`}>
    <h3 className="Event-date">{date}</h3>
    <ul>
      {slots.map(slot => (
        <li key={slot.time}>
          <Slot {...slot} />
        </li>
      ))}
    </ul>
  </div>
)

Event.propTypes = {
  date: React.PropTypes.string,
  slots: React.PropTypes.array,
  active: React.PropTypes.bool,
}

export default Event
