import React from 'react'
import Helmet from 'react-helmet'
import config from '../config.toml'
import Footer from '../components/footer'
import '../css/styles.scss'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const { siteTitle, siteDescription } = config

export default class Template extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
  }

  state = {
    pageShowMenu: false,
  }

  componentDidMount() {
    document.documentElement.classList.remove('is-loading')
  }

  render() {
    return (
      <div>
        <Helmet
          defaultTitle={siteTitle}
          titleTemplate="%s - JSConf Iceland 2018"
          meta={[
            { property: 'og:title', content: siteTitle },
            { property: 'og:site_name', content: siteTitle },
            { property: 'og:url', content: 'https://2018.jsconf.is' },
            { property: 'og:description', content: siteDescription },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:image',
              content: 'https://2018.jsconf.is/images/og.png',
            },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@jsconfis' },
            { name: 'twitter:title', content: siteTitle },
            { name: 'twitter:description', content: siteDescription },
            {
              name: 'twitter:image',
              content: 'https://2018.jsconf.is/images/og.png',
            },
          ]}
        />
        <div className={'top-bar'}>
          <Link to={prefixLink('/')} className="top-bar-title">
            <span className="show-for-sr">JSConf Iceland</span>
          </Link>
          <div>
            <div className="top-bar-right">
              <ul className="menu">
                <li>
                  <Link to={prefixLink('/about/')}>About</Link>
                </li>
                <li>
                  <Link to={prefixLink('/speakers/')}>Speakers</Link>
                </li>
                <li>
                  <Link to={prefixLink('/venue/')}>Venue</Link>
                </li>
                <li>
                  <Link to={prefixLink('/schedule/')}>Schedule</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main role="main">{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}
