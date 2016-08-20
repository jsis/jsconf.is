import React from 'react'
import Card, { CardContainer } from '../components/card'
import UpdateSection from '../components/update-section'
import { prefixLink } from 'gatsby-helpers'
import Waypoint from 'react-waypoint'

const updates = [
  'Check out the final(ish) schedule, including guest talks.',
  'Community trip registrations have closed',
  'Tickets sold out',
]

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
  heroWaypoint = ({ currentPosition }) => {
    const beyondHero = currentPosition === Waypoint.above
    if (this.props.onToggleMenu) {
      this.props.onToggleMenu(beyondHero)
    }
  }

  render () {
    return (
      <div>
        <div className="row align-center large-unstack">
          <div className="column large-4 large-order-1 large-text-right">
            <hr className="u-separator" />
            <h2 className="u-title">JSConf Iceland</h2>
            <h2 className="u-subtitle">August 25<sup>th</sup> — 26<sup>th</sup> 2016</h2>
            <UpdateSection updates={updates} />
          </div>
          <div className="large-6 column">
            <h3 className="u-shoutout">Feel free to explore</h3>
            <CardContainer>
              <Card icon="logo-clipped" link={prefixLink('/about/')} title="About" />
              <Card icon="schedule" link={prefixLink('/schedule/')} title="Schedule" />
              <Card onlyLarge blank />

              <Card onlyLarge blank />
              <Card icon="ticket" link={prefixLink('/tickets/')} title="Tickets" />
              <Card icon="tonkvisl" link={prefixLink('/venue/')} title="Venue" />

              <Card icon="call" link={prefixLink('/cfp/')} title="Call For Proposal" />
              <Card icon="podium" link={prefixLink('/speakers/')} title="Speakers" />
              <Card onlyLarge blank />

              <Card onlyLarge />
              <Card blank onlyLarge />
              <Card blank onlyLarge />

              <Card onlyLarge pushLeft />
              <Card onlyLarge />
            </CardContainer>
          </div>
        </div>
        <Waypoint onPositionChange={this.heroWaypoint} />
        <div className="row align-right show-for-large">
          <div className="large-6 column">
            <Card blank />
            <Card />
            <Card />

            <Card blank />
            <Card />
          </div>
        </div>
      </div>
    )
  }
}
