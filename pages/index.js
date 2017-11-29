import React from 'react'
import Helmet from 'react-helmet'
import Card, { CardContainer } from '../components/card'
import UpdateSection from '../components/update-section'
import Panel, { PanelButton } from '../components/panel'
import { prefixLink } from 'gatsby-helpers'

const updates = [
  <span>
    Apply for a{' '}
    <a href="https://jsconfis.typeform.com/to/xuQBqD" target="_blank">
      JSConf Iceland Scholarship
    </a>.
  </span>,
  <span>
    Next batch of tickets go on{' '}
    <a href="https://2018.jsconf.is/tickets/" target="_blank">
      sale
    </a>{' '}
    Tuesday, November 28th, at 15:00 UTC.
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
      <div>
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
                icon="ticket"
                link={'https://2018.jsconf.is/tickets/'}
                title="Tickets"
              />
              <Card
                icon="tonkvisl"
                link={prefixLink('/venue/')}
                title="Venue"
              />
              <Card
                icon="call"
                link={'http://cfp.jsconf.is/events/jsconf-iceland-2018'}
                title="Call For Proposal"
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
