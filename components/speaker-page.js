import React from 'react'
import BoxPage from './box-page'
import Profile from './profile'

const SpeakerPage = ({
  title,
  company,
  companyWebsite,
  slug,
  body,
  twitter,
  github,
  website,
}) => {
  // eslint-disable-next-line
  const profilePic = require(`../images/speakers/${slug}.jpg`)
  const boxPageProps = {
    title,
  }

  if (company) {
    boxPageProps.subtitle = companyWebsite ? <a href={companyWebsite}>{company}</a> : company
  }

  return (
    <BoxPage {...boxPageProps}>
      <Profile
        image={profilePic}
        name={title}
        twitter={twitter}
        website={website}
        github={github}
      />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </BoxPage>
  )
}

SpeakerPage.propTypes = {
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
  body: React.PropTypes.string,
  company: React.PropTypes.string,
  companyWebsite: React.PropTypes.string,
  twitter: React.PropTypes.string,
  github: React.PropTypes.string,
  website: React.PropTypes.string,
}

export default SpeakerPage
