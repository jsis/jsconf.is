import React from 'react'
import Card, { CardContainer } from '../components/card'
import { prefixLink } from 'gatsby-helpers'

const cards = [
  {
    icon: 'logo-clipped',
    link: prefixLink('/about/'),
    title: (
      <span>
        JSConf Iceland
        <small>August 25<sup>th</sup> — 26<sup>th</sup> 2016</small>
      </span>
    ),
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
      <CardContainer>
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </CardContainer>
    )
  }
}
