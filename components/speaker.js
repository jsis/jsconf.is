import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const Speaker = ({ speaker }) => (
  <Link
    className="Speaker"
    style={{
      backgroundImage: `url(${require(`!file-loader!../images/speakers/${speaker.slug}.jpg`)})`,
    }}
    to={prefixLink(`/speakers/${speaker.slug}/`)}
  >
    <div className="Speaker-info">
      <h4 className="Speaker-name">{speaker.name}</h4>
      <h5 className="Speaker-company">{speaker.company}</h5>
    </div>
  </Link>
)

Speaker.propTypes = {
  speaker: React.PropTypes.object,
}

export default Speaker
