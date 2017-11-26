import React from 'react'
import Helmet from 'react-helmet'
import BoxPage from './box-page'
import Profile from './profile'

const SpeakerPage = ({
  title,
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
  const boxPageProps = {
    title,
  }

  if (company) {
    boxPageProps.subtitle = companyWebsite ? (
      <a href={companyWebsite}>{company}</a>
    ) : (
      company
    )
  }

  return (
    <BoxPage {...boxPageProps}>
      <Helmet
        meta={[
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
            name: 'twitter:image',
            content: `https://2018.jsconf.is/assets/social/speakers/${
              slug
            }.jpg`,
          },
          { name: 'twitter:description', content: bio },
        ]}
      />
      <Profile
        image={profilePic}
        name={title}
        twitter={twitter}
        website={website}
        github={github}
      />
      <h2>{talk}</h2>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </BoxPage>
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
