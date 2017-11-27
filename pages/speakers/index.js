import React from 'react'
import BoxPage from '../../components/box-page'
import Speaker from '../../components/speaker'
import speakers from '../../data/speakers'

export default () => (
  <BoxPage expanded icon="podium" title="Speakers">
    <div className="SpeakerList">
      {speakers.map(speaker => (
        <Speaker key={speaker.slug} speaker={speaker} />
      ))}
    </div>
  </BoxPage>
)
