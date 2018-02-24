import React from 'react'
import './details.scss'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// const hearts = `url(${require('../../images/hearts.png')})`

const Details = ({
  title,
  description,
  track,
  isActive,
  name,
  link,
  time,
  /*
  saved,
  slug,
  company,
  onSave,
  onPrevious,
  onNext,
  */
  onClose,
}) =>
  <div className={`Details${isActive ? ' is-active' : ''}`}>
    {!isActive
      ? null
      : <div>
          <div className="Details-controls">
            <button className="Details-closeBtn" onClick={onClose}>
              <i className="Details-close" />
            </button>
            {/* <button onClick={onPrevious}>
              <i className="Details-leftArrow" />
            </button>
            <button onClick={onNext}>
              <i className="Details-rightArrow" />
            </button>
            <button onClick={onSave}>
              <i
                className={`Events-heart${saved ? ' is-filled' : ''}`}
                style={{ backgroundImage: hearts }}
              />
            </button> */}
          </div>
          <h2 className="Details-title">
            {title}
          </h2>
          {name && <p><Link className="u-base-link" to={prefixLink(link)}>{name}</Link></p>}
          <div className="Details-meta">
            {track === undefined || track === 'unified'
              ? null
              : <span>
                  <span className="Details-track">{track}</span> /{' '}
                </span>}
            <span className="Details-time">
              {time.replace(' ', ' - ')}
            </span>
          </div>
          <div
            className="Details-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* <figure className="Details-speaker">
            <img className="Details-speakerImg" src={require(`../../images/speakers/${slug}.jpg`)} alt={name} />
            <figcaption className="Details-speakerInfo">
              <Link className="u-base-link" to={prefixLink(link)}>
                {name}
              </Link>
              <br />
              {company}
            </figcaption>
          </figure> */}
        </div>}
  </div>

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
  saved: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  onNext: React.PropTypes.func,
  onPrevious: React.PropTypes.func,
  onSave: React.PropTypes.func,
}

export default Details
