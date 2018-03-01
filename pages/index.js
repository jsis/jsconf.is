import React from 'react'
import Helmet from 'react-helmet'
import Card, { CardContainer } from '../components/card'
import UpdateSection from '../components/update-section'
import Panel, { PanelButton } from '../components/panel'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const updates = [
  <span>
    Attendees get <Link to={prefixLink('/discounts/')}>amazing discounts</Link> from awesome local stores, restaurants and bars!
  </span>,
  <span>
    Checkout the <Link to={prefixLink('/schedule/')}>schedule</Link>, it’s live!
  </span>,
  <span>
    SO and weekend trips added to <Link to={prefixLink('/schedule/')}>the schedule</Link>.
  </span>,
  <span>
    Tickets are <strong>SOLD OUT</strong>!
  </span>,
  <span>
    Watch the{' '}
    <a href="https://www.youtube.com/watch?v=jX8bMHTD5WA" target="_blank">
      mood video
    </a>{' '}
    from the last JSConf Iceland.
  </span>,
]

export default class Home extends React.Component {
  static propTypes = {
    onToggleMenu: React.PropTypes.func,
  }

  render() {
    return (
      <div className="u-topSpace">
        <Helmet title="JSConf Iceland: March 1-2, 2018" />
        <div className="row align-center large-unstack">
          <div className="column large-4 large-order-1 large-text-right">
            <hr className="u-separator" />
            <h2 className="u-title">JSConf Iceland</h2>
            <h2 className="u-subtitle">
              March 1<sup>st</sup> — 2<sup>nd</sup> 2018
            </h2>
            <UpdateSection updates={updates} />
          </div>
          <div className="large-6 column">
            <h3 className="u-shoutout">Feel free to explore</h3>
            <CardContainer>
              <Card
                icon="logo-clipped"
                link={prefixLink('/about/')}
                title="About"
              />
              <Card
                icon="schedule"
                link={prefixLink('/schedule/')}
                title="Schedule"
              />
              <Card onlyLarge blank />

              <Card onlyLarge blank />
              <Card
                icon="handshake"
                link={prefixLink('/code-of-conduct/')}
                title="Code of Conduct"
              />
              <Card
                icon="tonkvisl"
                link={prefixLink('/venue/')}
                title="Venue"
              />
              <Card
                icon="play"
                link={prefixLink('/live/')}
                title="Live Stream"
              />
              <Card
                icon="podium"
                link={prefixLink('/speakers/')}
                title="Speakers"
              />

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
            <Panel>
              <p>JSConf will be held in Iceland March 1-2, 2018.</p>
              <p>
                That's a Thursday and Friday. Perfect for catching up on talks,
                and with friends from the JavaScript community.
              </p>
              <p>
                Expect 2 awesome tracks with over 30 speakers, an adventurous
                Saturday and a laid back Sunday brunch.
              </p>
              <PanelButton href={prefixLink('/about/')}>Learn More</PanelButton>
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
