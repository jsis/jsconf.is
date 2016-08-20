import React from 'react'
import './slot.scss'

const Slot = ({ time, tracks, active }) => (
  <div className={`Slot${active ? ' is-active' : ''}`}>
    <div className="Slot-time">{time}</div>
    <ul className="Slot-tracks">{tracks.map(({ title, name, grayed }) => (
      <li key={title} className={`Slot-track${grayed ? ' Slot-track--gray' : ''}`}>
        <h4 className="Slot-title">{title}</h4>
        {name && (
          <div className="Slot-meta">
            <p className="Slot-name">{name}</p>
          </div>
        )}
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
