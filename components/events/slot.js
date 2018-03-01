import React from 'react'
import classNames from 'classnames'
import isWithinRange from 'date-fns/is_within_range'
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
    now: React.PropTypes.string,
    to: React.PropTypes.object,
    from: React.PropTypes.object,
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
      <li className={`Slot-trackWrap${isActive ? ' is-active' : ''}`} key={slot.title + day}>
        <button
          key={slot.title}
          className="Slot-track"
          onClick={onOpenTrackDetails({ day, track, slot: index })}
        >
          {slot.slug && (
            <img
              className="Slot-image"
              src={require(`../../images/speakers/small/${slot.slug}.jpg`)}
              alt={slot.name}
            />
          )}
          <div>
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
          </div>
        </button>
      </li>
    )
  }

  render() {
    const { time, now, from, to, tracks } = this.props
    return (
      <div className="Slot">
        <div className={classNames('Slot-time', isWithinRange(now, from, to) && 'is-active')}>{time}</div>
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
