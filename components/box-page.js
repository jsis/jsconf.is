import React from 'react'
import Helmet from 'react-helmet'
import InlineSVG from 'svg-inline-react'
import classNames from 'classnames'

const BoxPage = ({
  icon,
  title,
  subtitle,
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
    <header className="Page-header">
      <div className="Page-headerData column">
        {icon && (
          <div className="Page-icon">
            <InlineSVG src={icon} />
          </div>
        )}
        <h1 className="Page-title">{title}</h1>
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
  </section>
)

BoxPage.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
  ]),
  inverse: React.PropTypes.bool,
  expanded: React.PropTypes.bool,
  metaTitle: React.PropTypes.string,
  children: React.PropTypes.node,
  subtitle: React.PropTypes.node,
}

export default BoxPage
