import React from 'react'
import BoxPage from '../../components/box-page'
import content from './_venue.md'
import icon from '!svg-inline!../../images/tonkvisl.svg'

const title = 'Venue'

export default () =>
  <BoxPage icon={icon} title={title}>
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
