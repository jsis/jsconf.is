import React from 'react'
import BoxPage from '../components/box-page'
import content from './_cfp.md'

export default () =>
  <BoxPage title="Call For Proposal">
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
