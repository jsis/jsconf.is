import React from 'react'
import './slot.scss'

class Slot extends React.Component {
  static propTypes = {
    time: React.PropTypes.string,
    tracks: React.PropTypes.array,
    active: React.PropTypes.object,
    onOpenTrackDetails: React.PropTypes.func,
  }

  renderBasicSlot (slot) {
    return (
      <li key={slot.title} className="Slot-track Slot-track--gray">
        <h4 className="Slot-title">{slot.title}</h4>
      </li>
    )
  }

  renderInterActiveSlot (slot) {
    const { active, onOpenTrackDetails } = this.props
    const isActive = active === slot

    return (
      <li
        key={slot.title}
        className={`Slot-track${isActive ? ' is-active' : ''}`}
        onClick={onOpenTrackDetails(slot)}
      >
        <h4 className="Slot-title">{slot.title}</h4>
        <div className="Slot-meta">
          <p className="Slot-name">{slot.name}{slot.track === 'unified' ? null : (
            <span><b> · </b>{slot.track}</span>
          )}</p>
        </div>
      </li>
    )
  }

  render () {
    const { time, tracks } = this.props
    return (
      <div className="Slot">
        <div className="Slot-time">{time}</div>
        <ul className="Slot-tracks">{tracks.map(slot => (
          slot.grayed
            ? this.renderBasicSlot(slot)
            : this.renderInterActiveSlot(slot)
        ))}</ul>
      </div>
    )
  }
}

export default Slot
