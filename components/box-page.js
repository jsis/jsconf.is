import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import InlineSVG from 'svg-inline-react'
import classNames from 'classnames'
import Footer from './footer'

const BoxPage = ({
  icon,
  title,
  subtitle,
  showHeader,
  blurb,
  metaTitle,
  children,
  inverse,
  expanded,
}) => (
  <section
    className={classNames({
      Page: true,
      'is-open': true,
      'Page--inverse': inverse,
    })}
  >
    <Helmet
      title={metaTitle || title}
      meta={[
        { property: 'og:title', content: `${metaTitle || title} - JSConf Iceland 2016` },
        { name: 'twitter:title', content: `${metaTitle || title} - JSConf Iceland 2016` },
      ]}
    />
    <div className="Page-wrap">
      <header className="Page-header">
        <div className="Page-headerData">
          {showHeader !== false && (
            <div className="Page-siteTitle">
              JSConf Iceland
              <br />
              <small>August 25<sup>th</sup> &mdash; 26<sup>th</sup> 2016</small>
            </div>
          )}
          {icon && (
            <div className="Page-icon">
              <InlineSVG src={icon} />
            </div>
          )}
          <h1 className="Page-title">{title}</h1>
          <Link
            to={prefixLink('/')}
            className="Page-close"
            style={{ touchAction: 'manipulation' }}
          >
            Close
          </Link>
        </div>
      </header>

      <article className="Page-content">
        {subtitle && <p className="Page-subtitle">{subtitle}</p>}
        {expanded ? children : (
          <div className="row align-center">
            <div className="column large-8 medium-10 small-12">
              {children}
            </div>
          </div>
        )}
      </article>

      <div className="Page-footer">
        <Footer />
      </div>
    </div>
    {blurb
      ? <div className="Page-blurb">{blurb}</div>
      : null
    }
  </section>
)

BoxPage.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  showHeader: React.PropTypes.bool,
  inverse: React.PropTypes.bool,
  expanded: React.PropTypes.bool,
  blurb: React.PropTypes.string,
  metaTitle: React.PropTypes.string,
  children: React.PropTypes.node,
  subtitle: React.PropTypes.string,
}

export default BoxPage
