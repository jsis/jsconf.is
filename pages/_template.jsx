import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import config from '../config'
import '../css/styles.scss'
import { rhythm } from 'utils/typography'

const { siteTitle, siteDescription } = config

module.exports = class Template extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }

  render() {
    return (
      <div>
        <Helmet
          defaultTitle={siteTitle}
          titleTemplate='%s - JSConf Iceland 2016'
          meta={[
            {property: 'og:title', content: siteTitle},
            {property: 'og:site_name', content: siteTitle},
            {property: 'og:url', content: 'https://2016.jsconf.is'},
            {property: 'og:description', content: siteDescription},
            {property: 'og:type', content: 'website'},
            {property: 'og:image', content: 'https://2016.jsconf.is/images/og.png'},
            {name: 'twitter:card', content: 'summary_large_image'},
            {name: 'twitter:site', content: '@jsconfis'},
            {name: 'twitter:title', content: siteTitle},
            {name: 'twitter:description', content: siteDescription},
            {name: 'twitter:image', content: 'https://2016.jsconf.is/images/og.png'},
          ]}
        />
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  }
}
