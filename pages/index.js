import React from 'react'
import Card, { CardContainer } from '../components/card'
import UpdateSection from '../components/update-section'
import Panel, { PanelButton } from '../components/panel'
import { prefixLink } from 'gatsby-helpers'
import Waypoint from 'react-waypoint'

const updates = [
  'Check out the final(ish) schedule, including guest talks.',
  'Community trip registrations have closed',
  'Tickets sold out',
]

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panelHidden: true,
    }
  }

  heroWaypoint = ({ currentPosition }) => {
    const beyondHero = currentPosition === Waypoint.above
    if (this.props.onToggleMenu) {
      this.props.onToggleMenu(beyondHero)
      this.setState({ panelHidden: !beyondHero })
    }
  }

  render () {
    return (
      <div>
        <Waypoint onPositionChange={this.heroWaypoint} topOffset={-400} />
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
        <div className="row align-center">
          <div className="large-10 column u-offsetParent">
            <Panel hidden={this.state.panelHidden}>
              <p>JSConf is coming to Iceland August 25th — 26th.</p>
              <p>That's a Thursday and Friday. Just after your vacation, right before you get too busy with work. Perfect for catching up on awesome talks and with friends from the JavaScript community.</p>
              <p>Expect two awesome tracks over two days with over 30 talks in total</p>
              <PanelButton href="#">Learn More</PanelButton>
            </Panel>
          </div>
        </div>
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
