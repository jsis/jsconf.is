import React from 'react'
import BoxPage from '../components/box-page'
import icon from '!svg-inline!../images/logo-clipped.svg'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default () => (
  <BoxPage icon={icon} inverse title="Accessibility Statement">
    <p>
      JSConf Iceland 2018 will be held at Harpa, Reykjavik. Our mission is to provide an <strong>inclusive</strong> and <strong>accessible</strong> conference for all attendees.
    </p>
    <h3>What to expect at the conference venue</h3>
    <ul>
      <li>There are parking places for disabled next to the entrance to Harpa from the indoor parking.</li>
      <li>The building is accessible for everyone with a lift that connects the floors.</li>
      <li>All doors are accessible to the disabled and accessible restrooms are located widely around the building.</li>
      <li>There are both gendered and gender neutral bathrooms.</li>
      <li>For blind or sight-impaired people that require assistance in getting around, please contact organizers in advance either on Slack or via email.</li>
      <li>All talks will be in English. We will also provide live captions.</li>
      <li>Anyone with mobility, hearing or vision issues can reserve a front-row seat, please contact organizers in advance either on slack or via email.</li>
      <li>Service dogs are welcome.</li>
      <li>Our speakers have been advised to avoid using epilepsy-inducing videos and animations, however we cannot fully guarantee compliance.</li>
      <li>Any food served will include vegan and non-vegan options, with clear allergy labels.</li>
      <li>Beverages (coffee, tea and water) will be available at all times.</li>
      <li>Wi-Fi and outlets will be available.</li>
      <li>We have a <Link to={prefixLink('/code-of-conduct/#media-policy')}>media policy</Link> in place, with lanyards indicating if attendees are comfortable with being photographed or recorded.</li>
      <li>A <Link to={prefixLink('/code-of-conduct/')}>Code of Conduct</Link> response team is available throughout the entire event to address any incidents or microaggressions.</li>
    </ul>

    <h3>What to expect at our parties</h3>
    <ul>
      <li>All party venues are accessible to the disabled.</li>
      <li>All parties will be catered, and we will be providing alcoholic beverages as well as soft drinks. Drinking straws will be available.</li>
      <li>Any food served will include vegan and non-vegan options, with clear allergy labels.</li>
      <li>Our media policy also applies at our parties.</li>
      <li>Service dogs are welcome.</li>
      <li>A <Link to={prefixLink('/code-of-conduct/')}>Code of Conduct</Link> response team is available throughout the parties to address any incidents or microaggressions.</li>
    </ul>

    <h3>Contact</h3>
    <p>If you’re in need of any further assistance or have questions, do not hesitate to contact the organizing team.</p>
  </BoxPage>
)
