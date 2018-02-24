import React from 'react'
import Helmet from 'react-helmet'
import BoxPage from '../components/box-page'
import * as schedule from '../data/schedule'
import Waypoint from 'react-waypoint'
import Events from '../components/events'

class Schedule extends React.Component {
  constructor (props) {
    super(props)
    this.state = { footerPosition: Waypoint.below }
  }
  onLeave = ({ currentPosition }) => {
    this.setState({ footerPosition: currentPosition })
  }

  render () {
    const { footerPosition } = this.state
    return (
      <BoxPage expanded inverse>
        <Helmet
          title="Schedule"
          meta={[
            {
              property: 'og:title',
              content: 'Schedule - JSConf Iceland 2018',
            },
            {
              name: 'twitter:title',
              content: 'Schedule - JSConf Iceland 2018',
            },
          ]}
        />
        <Events
          conference={schedule.conference}
          so={schedule.so}
          footerPosition={footerPosition}
        />
        <Waypoint onPositionChange={this.onLeave} bottomOffset={100} />
      </BoxPage>
    )
  }
}

export default Schedule
