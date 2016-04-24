import React from 'react'
import BoxPage from '../components/box-page'
import content from './_cfp.md'
import icon from '!svg-inline!../images/call.svg'

export default () =>
  <BoxPage title="Call For Proposal" icon={icon}>
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
