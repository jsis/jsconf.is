import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import manifest from './site.webmanifest'
import appleIcon from './images/meta/apple-touch-icon.png'
import favIconLg from './images/meta/favicon-32x32.png'
import favIconSm from './images/meta/favicon-16x16.png'

const googleId = 'UA-71097907-1'

export default class extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    favicon: React.PropTypes.string,
    body: React.PropTypes.string,
  }

  render() {
    const head = Helmet.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en" className="is-loading">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <meta name="theme-color" content="#f3df49" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={appleIcon}
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="32x32"
            href={favIconLg}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={favIconSm}
          />
          <link rel="manifest" href={manifest} />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}

          {cssLink}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleId}');
              `.trim(),
            }}
          />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  }
}
