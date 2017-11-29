import React from 'react'
import Helmet from 'react-helmet'
import './speaker-page.scss'

const SpeakerPage = ({
  title: name,
  company,
  companyWebsite,
  slug,
  talk,
  body,
  bio,
  twitter,
  github,
  website,
  path,
}) => {
  // eslint-disable-next-line
  const profilePic = require(`../images/speakers/${slug}.jpg`)

  return (
    <section className="Page is-open SpeakerPage">
      <Helmet
        meta={[
          {
            property: 'og:title',
            content: `${name} - JSConf Iceland 2018`,
          },
          { property: 'og:url', content: `https://2018.jsconf.is${path}/` },
          { property: 'og:description', content: bio },
          {
            property: 'og:image',
            content: `https://2018.jsconf.is/assets/social/speakers/${
              slug
            }.jpg`,
          },
          {
            property: 'og:image:width',
            content: '1200',
          },
          {
            property: 'og:image:height',
            content: '630',
          },
          {
            name: 'twitter:title',
            content: `${name} - JSConf Iceland 2018`,
          },
          {
            name: 'twitter:image',
            content: `https://2018.jsconf.is/assets/social/speakers/${
              slug
            }.jpg`,
          },
          { name: 'twitter:description', content: bio },
        ]}
      />
      <header className="SpeakerPage-header">
        <div className="SpeakerPage-info">
          <h1 className="SpeakerPage-name">{name}</h1>
          {company &&
            (companyWebsite ? (
              <a href={companyWebsite} className="SpeakerPage-company">
                {company}
              </a>
            ) : (
              <span className="SpeakerPage-company">{company}</span>
            ))}
        </div>
        <div className="SpeakerPage-imageWrap">
          <img className="SpeakerPage-image" src={profilePic} alt={name} />
        </div>
      </header>

      <div className="SpeakerPage-talk">
        <div className="row align-center">
          <div className="column xxlarge-8 xlarge-9 large-10 med-11 small-12">
            <h2 className="SpeakerPage-talkTitle">{talk}</h2>
            <div
              className="SpeakerPage-abstract"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
      </div>

      <aside>
        <div className="row align-center">
          <div className="column xxlarge-8 xlarge-9 large-10 med-11 small-12">
            <h3>About {name}</h3>
            {bio && <p>{bio}</p>}
            {(website || twitter || github) && (
              <div>
                <h4 className="SpeakerPage-socialTitle">
                  Find {name.split(' ')[0]} online at:
                </h4>
                <ul className="SpeakerPage-links">
                  {website && (
                    <li className="SpeakerPage-link">
                      <a href={website}>
                        {website.replace(/^(https?:)?\/\//, '')}
                      </a>
                    </li>
                  )}
                  {twitter && (
                    <li className="SpeakerPage-link">
                      <a href={`https://twitter.com/${twitter}`}>
                        twitter.com/{twitter}
                      </a>
                    </li>
                  )}
                  {github && (
                    <li className="SpeakerPage-link">
                      <a href={`https://github.com/${github}`}>
                        github.com/{github}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </aside>
    </section>
  )
}

SpeakerPage.propTypes = {
  title: React.PropTypes.string,
  path: React.PropTypes.string,
  bio: React.PropTypes.string,
  slug: React.PropTypes.string,
  body: React.PropTypes.string,
  company: React.PropTypes.string,
  companyWebsite: React.PropTypes.string,
  twitter: React.PropTypes.string,
  github: React.PropTypes.string,
  website: React.PropTypes.string,
  talk: React.PropTypes.node,
}

export default SpeakerPage
