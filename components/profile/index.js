import React from 'react'
import './index.scss'

const Profile = ({
  image,
  name,
  twitter,
  github,
  website,
}) => (
  <div className="Profile">
    <img className="ProfileImage" src={image} alt={name} />
    <div className="ProfileLinks">
      {website && (
        <p className="ProfileLink">
          <a href={website}>{website.replace(/^(https?:)?\/\//, '')}</a>
        </p>
      )}
      {twitter && (
        <p className="ProfileLink">
          <a href={`https://twitter.com/${twitter}`}>twitter.com/{twitter}</a>
        </p>
      )}
      {github && (
        <p className="ProfileLink">
          <a href={`https://github.com/${github}`}>github.com/{github}</a>
        </p>
      )}
    </div>
  </div>
)

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  twitter: React.PropTypes.string,
  github: React.PropTypes.string,
  website: React.PropTypes.string,
}

export default Profile
