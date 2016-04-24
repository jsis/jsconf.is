import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>
          JSConf Iceland 2016
        </h1>
        <ul>
          <li>
            <Link to={prefixLink('/about/')}>About</Link>
          </li>
          <li>
            <Link to={prefixLink('/tickets/')}>Tickets</Link>
          </li>
          <li>
            <Link to={prefixLink('/schedule/')}>Schedule</Link>
          </li>
          <li>
            <Link to={prefixLink('/speakers/')}>Speakers</Link>
          </li>
          <li>
            <Link to={prefixLink('/venue/')}>Venue</Link>
          </li>
          <li>
            <Link to={prefixLink('/cfp/')}>Call For Proposal</Link>
          </li>
        </ul>
      </div>
    )
  }
}
