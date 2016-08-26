import React from 'react'
import './index.scss'

const UpdateSection = ({ updates }) => {
  if (updates.length === 0) {
    return null
  }

  return (
    <div>
      <h3 className="u-shoutout UpdateShoutout">Updates</h3>
      <hr className="u-separator" />
      <ul>
        {updates.map((update, i) => (
          <li key={i} className="Update">{update}</li>
        ))}
      </ul>
      <hr className="u-separator" />
    </div>
  )
}

UpdateSection.propTypes = {
  updates: React.PropTypes.array,
}

export default UpdateSection
