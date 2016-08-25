import React from 'react'
import BoxPage from '../components/box-page'

export default () =>
  <BoxPage title="Discounts">
    <div>
      <p>JSConf Iceland attendees can get discounts at the following places by showing their conference badge.</p>
      <ul>
        <li>
          <h4>American Bar</h4>
          <p>Large beer 800 ISK<br />Happy hour from 16:00 - 19:00</p>
        </li>
        <li>
          <h4>Hamborgarabúllan</h4>
          <p>10% off</p>
        </li>
        <li>
          <h4>Loftið</h4>
          <p>15% off<br />Happy hour from 16:00 - 21:00
            has <em>Budweiser Budvar 500 ISK, Wine 700 ISK, House cocktails 1.500 ISK</em></p>
        </li>
        <li>
          <h4>Snorri craft bar</h4>
          <p>15% off beers on tap</p>
        </li>
      </ul>
    </div>
  </BoxPage>
