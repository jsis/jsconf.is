import React from 'react'
import BoxPage from '../components/box-page'
import icon from '!svg-inline!../images/logo-clipped.svg'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default () => (
  <BoxPage icon={icon} inverse title="Code of Conduct">
    <p>JSConf Iceland welcomes everyone and defends you from harassment. All attendees, speakers, sponsors and volunteers at our conference are required to agree with the <a href="http://confcodeofconduct.com/" target="_blank">code of conduct</a>. Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.</p>

    <h2>Accessibility Statement</h2>
    <p>Our mission is to provide an <strong>inclusive</strong> and <strong>accessible</strong> conference for all attendees. Read our <Link to={prefixLink('/accessibility/')}>accessibility statement</Link> for more info.
    </p>

    <h2 id="media-policy">Media policy</h2>
    <p>We will have coloured lanyards for attendees to indicate their comfort level with being photographed:</p>

    <dl>
      <dt>Black:</dt> <dd>It's fine to photograph</dd>
      <dt>Colored:</dt> <dd>Do <strong>not</strong> photograph</dd>
    </dl>

    <p>In case of any doubt, please ask before taking photographs of attendees, speakers or staff.</p>
  </BoxPage>
)
