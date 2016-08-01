import React from 'react'
import Card, { CardContainer } from '../components/card'
import { prefixLink } from 'gatsby-helpers'

const cards = [
  {
    icon: 'logo-clipped',
    link: prefixLink('/about/'),
    title: 'About',
  },
  {
    icon: 'ticket',
    link: prefixLink('/tickets/'),
    title: 'Tickets',
  },
  {
    icon: 'schedule',
    link: prefixLink('/schedule/'),
    title: 'Schedule',
  },
  {
    icon: 'podium',
    link: prefixLink('/speakers/'),
    title: 'Speakers',
  },
  {
    icon: 'tonkvisl',
    link: prefixLink('/venue/'),
    title: 'Venue',
  },
  {
    icon: 'call',
    link: prefixLink('/cfp/'),
    title: 'Call For Proposal',
  },
]

export default class Home extends React.Component {
  render () {
    return (
      <div className="row align-center large-unstack">
        <div className="column large-order-1 large-text-right large-expand">
          <hr className="u-separator" />
          <h2 className="u-title">JSConf Iceland</h2>
          <h2>August 25th — 26th 2016</h2>
          <hr className="u-separator" />
        </div>
        <div className="column">
          <h3 className="u-shoutout">Feel free to explore</h3>
          <CardContainer>
            {cards.map(card => (
              <Card key={card.title} {...card} />
            ))}
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
          </CardContainer>
        </div>
      </div>
    )
  }
}
