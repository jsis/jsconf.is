import React from 'react'
import BoxPage from '../components/box-page'
import Discount from '../components/discount/discount'
import discounts from '../data/discounts'
import { companies } from '../data/sponsors'

export default () => (
  <BoxPage title="Discounts">
    <div>
      <p>
        Attendees get discounts at the following places by showing their
        conference badge.
      </p>
      <div className="Discounts">
        {discounts.map(discount =>
          <Discount
            key={discount.company}
            company={companies[discount.company]}
            value={discount.discount}
            description={discount.description}
          />
        )}
      </div>
    </div>
  </BoxPage>
)
