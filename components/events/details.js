import React from 'react'
import './details.scss'

const Details = ({ title, description, track, isActive, time, name, slug, link, company, onClose }) => (
  <div className={`Details${isActive ? ' is-active' : ''}`}>
    {! isActive ? null : (
      <div>
        <button onClick={onClose}>CLOSE</button>
        <h2 className="Details-title">{title}</h2>
        <div className="Details-meta">
          {track === 'unified' ? null : (
            <span><span className="Details-track">{track}</span> / </span>
          )}
          <span className="Details-time">{time}</span>
        </div>
        <div className="Details-description" dangerouslySetInnerHTML={{ __html: description }} />
        <figure className="Details-speaker">
          <img className="Details-speakerImg" src={require(`../../images/speakers/${slug}.jpg`)} alt={name} />
          <figcaption className="Details-speakerInfo">
            <a className="u-base-link" href={link}>{name}</a><br />
            {company}
          </figcaption>
        </figure>
      </div>
    )}
  </div>
)

Details.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  name: React.PropTypes.string,
  slug: React.PropTypes.string,
  link: React.PropTypes.string,
  time: React.PropTypes.string,
  company: React.PropTypes.string,
  track: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  onClose: React.PropTypes.func,
}

export default Details
