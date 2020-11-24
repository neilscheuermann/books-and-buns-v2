import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PodcastPlayer from '../components/PodcastPlayer'

export default function PodcastEpisodeTemplate({ data }) {
  const podcastEpisode = data.podcastEpisode.item
  const { title, isoDate, content, itunes } = podcastEpisode
  const { libsynItemId } = data.libsynParsedItem

  return (
    <PodcastStyles className="apply-max-width-blog">
      <img src={itunes.image} alt={`${title} cover`} />
      <h1>{title}</h1>
      <p>{isoDate}</p>
      <PodcastPlayer episodeId={libsynItemId} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PodcastStyles>
  )
}

const PodcastStyles = styled.div`
  p {
    margin: 24px 0;
  }
  a {
    text-decoration: underline;
  }
`

export const query = graphql`
  query($id: String!, $title: String!) {
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
    libsynParsedItem(title: { eq: $title }) {
      libsynItemId
    }
  }
`
