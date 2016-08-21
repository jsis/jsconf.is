import React from 'react'
import BoxPage from '../components/box-page'
import * as schedule from '../data/schedule'
import Waypoint from 'react-waypoint'
import Events from '../components/events'
import scheduleTemplate from './_schedule.pug'

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
      <BoxPage title="Schedule" expanded>
        <Events
          days={schedule.conference}
          other={scheduleTemplate({ schedule })}
          footerPosition={footerPosition}
        />
        <Waypoint onPositionChange={this.onLeave} bottomOffset={100} />
      </BoxPage>
    )
  }
}

export default Schedule
