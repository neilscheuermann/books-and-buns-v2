import React from 'react'
import { graphql } from 'gatsby'

export default function PodcastEpisodeTemplate({ data }) {
  const podcastEpisode = data.podcastEpisode.item
  const { title, pubDate, content } = podcastEpisode

  return (
    <div>
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    podcastEpisode: podcastRssFeedEpisode(id: { eq: $id }) {
      item {
        title
        pubDate
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
