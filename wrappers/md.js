import React from 'react'
import SpeakerPage from '../components/speaker-page'

class Md extends React.Component {
  static propTypes = {
    route: React.PropTypes.shape({
      page: React.PropTypes.shape({
        data: React.PropTypes.shape({
          body: React.PropTypes.string.isRequired,
        }),
      }),
    }),
  }

  render () {
    const post = this.props.route.page.data
    console.log(post)
    const base = (
      <div className="markdown">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
    return post.type === 'speaker' ? <SpeakerPage {...post} /> : base
  }
}

export default Md
