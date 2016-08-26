import React from 'react'
import BoxPage from '../components/box-page'
import content from './_trips.md'

export default () =>
  <BoxPage title="Saturday trips">
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
