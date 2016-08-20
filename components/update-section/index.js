import React from 'react'
import './index.scss'

function UpdateSection({ updates }) {
  if (updates.length === 0) {
    return null
  }

  return (
    <div>
      <h3 className="u-shoutout UpdateShoutout">Updates</h3>
      <hr className="u-separator" />
      <ul>
        {updates.map(update => (
          <li key={update} className="Update">{update}</li>
        ))}
      </ul>
      <hr className="u-separator" />
    </div>
  )
}

export default UpdateSection
