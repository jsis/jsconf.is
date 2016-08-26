import React from 'react'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import config from '../config.toml'
import Footer from '../components/footer'
import '../css/styles.scss'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const { siteTitle, siteDescription } = config

module.exports = class Template extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
  }

  state = {
    pageShowMenu: false,
  }

  componentDidMount () {
    document.documentElement.classList.remove('is-loading')
  }

  onPageToggleMenu = (show) => {
    this.setState({
      pageShowMenu: show,
    })
  }

  render () {
    const { location } = this.props
    const { pageShowMenu } = this.state
    const isHome = location.pathname === '/'
    const topBarClasses = classnames({
      'top-bar': true,
      'top-bar-subPage': !isHome,
      'top-bar-explicitShow': pageShowMenu,
    })

    return (
      <div>
        <Helmet
          defaultTitle={siteTitle}
          titleTemplate="%s - JSConf Iceland 2016"
          meta={[
            { property: 'og:title', content: siteTitle },
            { property: 'og:site_name', content: siteTitle },
            { property: 'og:url', content: 'https://2016.jsconf.is' },
            { property: 'og:description', content: siteDescription },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: 'https://2016.jsconf.is/images/og.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@jsconfis' },
            { name: 'twitter:title', content: siteTitle },
            { name: 'twitter:description', content: siteDescription },
            { name: 'twitter:image', content: 'https://2016.jsconf.is/images/og.png' },
          ]}
        />
        <div className={topBarClasses}>
          <Link to={prefixLink('/')} className="top-bar-title"><span className="show-for-sr">JSConf Iceland</span></Link>
          <div>
            <div className="top-bar-right">
              <ul className="menu">
                <li><Link to={prefixLink('/about/')}>About</Link></li>
                <li><Link to={prefixLink('/speakers/')}>Speakers</Link></li>
                <li><Link to={prefixLink('/venue/')}>Venue</Link></li>
                <li><Link to={prefixLink('/schedule/')}>Schedule</Link></li>
                <li><Link to={prefixLink('/trips/')}>Trips</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {React.cloneElement(this.props.children, { onToggleMenu: this.onPageToggleMenu })}
        <Footer />
      </div>
    )
  }
}
