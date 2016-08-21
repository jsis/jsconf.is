import React from 'react'
import BoxPage from '../components/box-page'
import * as schedule from '../data/schedule'
import Events from '../components/events'

export default () =>
  <BoxPage title="Schedule" expanded>
    <Events days={schedule.conference} />
  </BoxPage>
