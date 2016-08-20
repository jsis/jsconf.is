import React from 'react'
import BoxPage from '../components/box-page'
import scheduleTemplate from './_schedule.pug'
import * as schedule from '../data/schedule'
import icon from '!svg-inline!../images/schedule.svg'

export default () =>
  <BoxPage icon={icon} title="Schedule">
    <div dangerouslySetInnerHTML={{ __html: scheduleTemplate({ schedule }) }} />
  </BoxPage>
