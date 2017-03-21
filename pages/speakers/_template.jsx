import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config'
import '../../css/styles.scss'

const { siteTitle, siteDescription } = config

module.exports = class Template extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    route: React.PropTypes.object,
    location: React.PropTypes.object,
  }

  static contextTypes = {
    router: React.PropTypes.object,
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyUp)
  }

  onKeyUp = ({ keyCode }) => {
    this.setCurrentSpeakerIndex()
    if (this.speakerIndex === -1) return
    const { router } = this.context
    const nexRoute = this.getNextRoute(keyCode)
    if (nexRoute) router.push(nexRoute.path)
  }

  getNextRoute (keyCode) {
    switch (keyCode) {
      case 37: return this.prevSpeaker()
      case 39: return this.nextSpeaker()
      default: return null
    }
  }

  setCurrentSpeakerIndex () {
    const { location, route } = this.props
    this.speakerIndex = route.childRoutes.findIndex(page => page.path === location.pathname)
  }

  nextSpeaker () {
    const { route } = this.props
    return route.childRoutes[this.speakerIndex + 1]
  }

  prevSpeaker () {
    const { route } = this.props
    return route.childRoutes[this.speakerIndex - 1]
  }

  render () {
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
            { property: 'og:image', content: 'https://2018.jsconf.is/images/og.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@jsconfis' },
            { name: 'twitter:title', content: siteTitle },
            { name: 'twitter:description', content: siteDescription },
            { name: 'twitter:image', content: 'https://2018.jsconf.is/images/og.png' },
          ]}
        />
        {this.props.children}
      </div>
    )
  }
}
