import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'


module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <meta name="theme-color" content="#f3df49" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <link rel="shortcut icon" href={this.props.favicon} />
          <TypographyStyle />
          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
})
