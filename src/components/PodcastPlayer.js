import React from 'react'

import { ORANGE } from '../styles/GlobalStyles'

export default function PodcastPlayer({ episodeId }) {
  return (
    <iframe
      title="Podcast player"
      style={{ border: 'none;' }}
      src={`//html5-player.libsyn.com/embed/episode/id/${episodeId}/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/${ORANGE}/`}
      height="90"
      width="100%"
      scrolling="no"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      oallowfullscreen
      msallowfullscreen
    />
  )
}
