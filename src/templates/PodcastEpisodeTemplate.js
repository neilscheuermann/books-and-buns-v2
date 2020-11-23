import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export default function PodcastEpisodeTemplate({ data }) {
  const podcastEpisode = data.podcastEpisode.item
  const { title, isoDate, content, itunes } = podcastEpisode

  return (
    <PodcastStyles className="apply-max-width-blog">
      <h1>{title}</h1>
      <p>{isoDate}</p>
      <iframe
        style={{ border: 'none;' }}
        title="podcast player"
        src="//html5-player.libsyn.com/embed/episode/id/16832135/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/f79b15/"
        height="90"
        width="100%"
        scrolling="no"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        oallowfullscreen
        msallowfullscreen
      ></iframe>
      {/* <img src={itunes.image} alt={`${title} cover`} /> */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PodcastStyles>
  )
}

const PodcastStyles = styled.div`
  a {
    text-decoration: underline;
  }
`

export const query = graphql`
  query($id: String!) {
    podcastEpisode: podcastRssFeedEpisode(id: { eq: $id }) {
      item {
        title
        isoDate(formatString: "MM/DD/YYYY")
        content
        itunes {
          episode
          image
          duration
        }
      }
    }
  }
`
