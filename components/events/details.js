import React from 'react'
import './details.scss'

const Details = ({ title, description, name, slug, link, track, active, onClose }) => (
  <div className={`Details${active ? ' is-active' : ''}`}>
    {! active ? null : (
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
  active: React.PropTypes.bool,
}

export default Details
