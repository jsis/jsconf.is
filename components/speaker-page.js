import React from 'react'

const SpeakerPage = ({ title, slug, body }) => (
  <div className="markdown">
    <h2>{title}</h2>
    <img src={require(`../images/speakers/${slug}.jpg`)} alt={title} />
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

SpeakerPage.propTypes = {
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
  body: React.PropTypes.string,
}

export default SpeakerPage
