import React from 'react'
import Slot from './slot'
import './event.scss'

const Event = ({ date, isActive, slots, active, onOpenTrackDetails }) => (
  <div className={`Event${isActive ? ' is-active' : ''}`}>
    <h3 className="Event-date">{date}</h3>
    <ul>
      {slots.map(slot => (
        <li key={slot.time}>
          <Slot {...slot} active={active} onOpenTrackDetails={onOpenTrackDetails} />
        </li>
      ))}
    </ul>
  </div>
)

Event.propTypes = {
  date: React.PropTypes.string,
  slots: React.PropTypes.array,
  isActive: React.PropTypes.bool,
  active: React.PropTypes.object,
  onOpenTrackDetails: React.PropTypes.func,
}

export default Event
