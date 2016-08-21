import React from 'react'
import './details.scss'

const Details = ({ title, description, track, isActive, name, slug, link, onClose }) => (
  <div className={`Details${isActive ? ' is-active' : ''}`}>
    {! isActive ? null : (
      <div>
        <button onClick={onClose}>CLOSE</button>
        <h2>{title}</h2>
        {track === 'unified' ? null : (
          <p><b>Track: </b>{track}</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: description }} />
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
  track: React.PropTypes.string,
  isActive: React.PropTypes.bool,
}

export default Details
