import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import InlineSVG from 'svg-inline-react'

export default ({ icon, title, showHeader, blurb, metaTitle, children }) =>
  <section className="Page is-open">
    <Helmet
      title={metaTitle || title}
      meta={[
        {property: 'og:title', content: `${metaTitle || title} - JSConf Iceland 2016`},
        {name: 'twitter:title', content: `${metaTitle || title} - JSConf Iceland 2016`},
      ]}
    />
    <div className="Page-wrap">
      <header className="Page-header">
        <div className="Page-headerData">
          { showHeader !== false
            ?
              <div className="Page-siteTitle">
                JSConf Iceland
                <br />
                <small>August 25<sup>th</sup> &mdash; 26<sup>th</sup> 2016</small>
              </div>
            : null
          }

          { icon
            ? <div className="Page-icon">
                <InlineSVG src={require(`svg-inline!../images/${icon}.svg`)} />
              </div>
            : null
          }
          <h1 className="Page-title">{title}</h1>
          <Link to={prefixLink('/')} className="Page-close" style={{ touchAction: 'manipulation' }}>Close</Link>
        </div>
      </header>

      <article className="Page-content">
        <div className="row align-center">
          <div className="column large-8 medium-10 small-12">
            {children}
          </div>
        </div>
      </article>

      <div className="Page-footer">
      </div>
    </div>
    {blurb
      ? <div className="Page-blurb">{blurb}</div>
      : null
    }
  </section>
