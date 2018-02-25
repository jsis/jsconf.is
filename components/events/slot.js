import React from 'react'
import './slot.scss'
const hearts = `url(${require('../../images/hearts.png')})`

class Slot extends React.Component {
  static propTypes = {
    time: React.PropTypes.string,
    tracks: React.PropTypes.array,
    active: React.PropTypes.object,
    savedSlugs: React.PropTypes.object,
    day: React.PropTypes.number,
    index: React.PropTypes.number,
    onOpenTrackDetails: React.PropTypes.func,
  }

  renderBasicSlot(slot) {
    return (
      <li key={slot.title} className="Slot-track Slot-track--gray">
        <h4
          className="Slot-title"
          dangerouslySetInnerHTML={{ __html: slot.title }}
        />
      </li>
    )
  }

  renderInterActiveSlot(slot, track) {
    const { active, onOpenTrackDetails, day, index, savedSlugs } = this.props
    const isActive =
      active &&
      active.day === day &&
      active.slot === index &&
      active.track === track

    return (
      <li
        key={slot.title}
        className={`Slot-track${isActive ? ' is-active' : ''}`}
        onClick={onOpenTrackDetails({ day, track, slot: index })}
      >
        <h4 className="Slot-title">{slot.title}</h4>
        {slot.name && (
          <div className="Slot-meta">
            <p className="Slot-name">
              {slot.name}
              {slot.track !== 'unified' && (
                <span>
                  <b> · </b>
                  {slot.track}
                </span>
              )}
              {savedSlugs[slot.slug] && (
                <span>
                  &nbsp;
                  <i
                    className="Events-heart Events-heart--gray is-filled"
                    style={{ backgroundImage: hearts }}
                  />
                </span>
              )}
            </p>
          </div>
        )}
      </li>
    )
  }

  render() {
    const { time, tracks } = this.props
    return (
      <div className="Slot">
        <div className="Slot-time">{time}</div>
        <ul className="Slot-tracks">
          {tracks.map(
            (slot, track) =>
              slot.grayed
                ? this.renderBasicSlot(slot)
                : this.renderInterActiveSlot(slot, track)
          )}
        </ul>
      </div>
    )
  }
}

export default Slot
