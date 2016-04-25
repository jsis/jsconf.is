import React from 'react'
import BoxPage from '../components/box-page'
import icon from '!svg-inline!../images/ticket.svg'

export default () =>
  <BoxPage icon={icon} title="Tickets">
    <p>
      Your ticket includes access to all talks, meals and parties for
      the days of the conference. If you have any special requirements,
      please don't hesitate to <a href="mailto:team@jsconf.is">contact us directly</a>.
    </p>
    <h4>EARLY BIRD AND GENERAL ADMISSION TICKETS SOLD OUT</h4>
    <p>
      Remaining tickets include diversity support which helps us get underrepresented
      groups to our conference. Thank you for your consideration.
    </p>
    <ul>
      <li>General Admission + 50% Diversity Support (112,500 ISK, ~$900 USD)</li>
      <li>General Admission + 100% Diversity Support (150,000 ISK, ~$1200 USD)</li>
    </ul>
    <p className="text-center">
      <a className="button large" href="https://ti.to/jsconf-is/2016">
        Buy tickets with diversity support
      </a>
    </p>

    <h2>Workshops (65,000 ISK, ~$515 USD)</h2>
    <p>
      Two full day workshops will be held by our friends at{' '}
      <a href="http://svef.is" target="_blank" title="The Icelandic Web Industry Association">SVEF</a>
      {' '}on the day before the conference, Wednesday August 24<sup>th</sup>.
      Only <strong>45 seats</strong> are available for each workshop. Tickets will be
      available on April 20<sup>th</sup>, 15:00 UTC. <strong>Note that both workshops
      are held on the same day</strong>.
    </p>
    <ul>
      <li>
        <strong>Using ES6 & React</strong> with{' '}
        <a href="/speakers/brian-holt"><strong>Brian Holt</strong></a>
      </li>
      <li>
        <strong>Smart Responsive Design Patterns: Front-End & Performance</strong> with{' '}
        <a href="/speakers/vitaly-friedman"><strong>Vitaly Friedman</strong></a>
      </li>
    </ul>
    <p className="text-center">
      <a className="button large" href="https://ti.to/jsconf-is/2016-workshops">
        Buy workshop tickets
      </a>
    </p>

    <h2>Why are you selling all the tickets so early?</h2>
    <p>
      Iceland is an especially popular tourist destination in the summer.
      We want to give attendees the chance to make their travel arrangements
      as far in advance as possible to get the most choices and the best prices.
    </p>
  </BoxPage>
