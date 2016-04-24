import React from 'react'
import BoxPage from '../components/box-page'
import content from './_about.md'

const title = (
  <div>
    JSConf Iceland<br />
    <small>August 25<sup>th</sup> &mdash; 26<sup>th</sup> 2016</small>
  </div>
)

export default () =>
  <BoxPage icon="logo-clipped" showHeader={false} title={title} metaTitle="About">
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
