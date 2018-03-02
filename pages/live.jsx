import React from 'react'
import BoxPage from '../components/box-page'
import icon from '!svg-inline!../images/play.svg'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const ready = true
const heklaId = '4P_kJGmJGyw'
const katlaId = '3Nv9muOkb6k'

export default () =>
  <BoxPage icon={icon} title="Live stream" inverse>
    {!ready && <div className="text-center">
      <p>Here you will be able to watch the conference live! Since the conference hasn't started yet, you can follow us <a href="https://twitter.com/jsconfis" target="_blank">Twitter</a> for up to date information, checkout the <Link to={prefixLink('/schedule/')}>schedule</Link> or watch the mood video from last year:</p>
      <div className="FlexEmbed">
        <div className="FlexEmbed-ratio FlexEmbed-ratio--16by9" />
        <iframe className="FlexEmbed-content" src="https://www.youtube.com/embed/jX8bMHTD5WA?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen />
      </div>
    </div>}
    {ready && <div className="text-center">
      <h3>Hekla</h3>
      <div className="FlexEmbed">
        <div className="FlexEmbed-ratio FlexEmbed-ratio--16by9" />
        <iframe className="FlexEmbed-content" src={`https://www.youtube.com/embed/${heklaId}?rel=0&amp;showinfo=0`} frameBorder="0" allowFullScreen />
      </div>
      <h3 className="u-topSpace">Katla</h3>
      <div className="FlexEmbed">
        <div className="FlexEmbed-ratio FlexEmbed-ratio--16by9" />
        <iframe className="FlexEmbed-content" src={`https://www.youtube.com/embed/${katlaId}?rel=0&amp;showinfo=0`} frameBorder="0" allowFullScreen />
      </div>
    </div>}
  </BoxPage>
