import React from 'react'
import BoxPage from '../components/box-page'
import content from './_cfp.md'

const title = 'Venue'

export default () =>
  <BoxPage icon={content.icon} title={title}>
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
