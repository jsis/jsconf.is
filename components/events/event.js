import React from 'react'
import Slot from './slot'
import './event.scss'

const Event = ({
  date,
  isActive,
  slots,
  savedSlugs,
  active,
  onOpenTrackDetails,
  index,
}) => (
  <div className={`Event${isActive ? ' is-active' : ''}`}>
    <h3 className="Event-date">{date}</h3>
    <ul>
      {slots.length ? (
        slots.map((slot, slotIndex) => (
          <li key={slotIndex}>
            <Slot
              {...slot}
              day={index}
              savedSlugs={savedSlugs}
              index={slotIndex}
              active={active}
              onOpenTrackDetails={onOpenTrackDetails}
            />
          </li>
        ))
      ) : (
        <li>More info coming soon!</li>
      )}
    </ul>
  </div>
)

Event.propTypes = {
  date: React.PropTypes.string,
  slots: React.PropTypes.array,
  isActive: React.PropTypes.bool,
  active: React.PropTypes.object,
  savedSlugs: React.PropTypes.object,
  index: React.PropTypes.number,
  onOpenTrackDetails: React.PropTypes.func,
}

export default Event
