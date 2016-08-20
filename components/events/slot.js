import React from 'react'
import './slot.scss'

const Slot = ({ time, tracks, active, onOpenTrackDetails }) => (
  <div className={`Slot${active ? ' is-active' : ''}`}>
    <div className="Slot-time">{time}</div>
    <ul className="Slot-tracks">{tracks.map(slot => (
      slot.grayed ?
        <li key={slot.title} className="Slot-track Slot-track--gray">
          <h4 className="Slot-title">{slot.title}</h4>
        </li>
      :
        <li key={slot.title} className="Slot-track" onClick={onOpenTrackDetails(slot)}>
          <h4 className="Slot-title">{slot.title}</h4>
          <div className="Slot-meta">
            <p className="Slot-name">{slot.name}{slot.track === 'unified' ? null : (
              <span><b> · </b>{slot.track}</span>
            )}</p>
          </div>
        </li>
    ))}</ul>
  </div>
)

Slot.propTypes = {
  time: React.PropTypes.string,
  tracks: React.PropTypes.array,
  active: React.PropTypes.bool,
}

export default Slot
