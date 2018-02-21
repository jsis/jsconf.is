import React from 'react'
import BoxPage from '../../components/box-page'
import Speaker from '../../components/speaker'
import speakers from '../../data/speakers'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default () => (
  <BoxPage
    inverse
    expanded
    icon="podium"
    title={
      <div>
        Speakers
        <small>Check out the <Link to={prefixLink('/schedule/')}>schedule</Link>.</small>
      </div>
    }
    metaTitle="Speakers"
  >
    <div className="SpeakerList">
      {speakers.map(speaker => (
        <Speaker key={speaker.slug} speaker={speaker} />
      ))}
    </div>
  </BoxPage>
)
