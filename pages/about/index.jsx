import React from 'react'
import BoxPage from '../../components/box-page'
import content from './_about.md'
import icon from '!svg-inline!../../images/logo-clipped.svg'

const title = (
  <div>
    JSConf Iceland<br />
    <small>March 1<sup>st</sup> &mdash; 2<sup>nd</sup> 2018</small>
  </div>
)

export default () =>
  <BoxPage icon={icon} showHeader={false} title={title} metaTitle="About">
    <div dangerouslySetInnerHTML={{ __html: content.body }} />
  </BoxPage>
