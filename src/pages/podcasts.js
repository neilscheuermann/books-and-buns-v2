import React from 'react'
import { graphql } from 'gatsby'
import PodcastList from '../components/PodcastList'

export default function PodcastsPage({ data }) {
  const podcastEpisodes = data.podcastEpisodes.nodes

  return (
    <div>
      <h1>The Books and Buns Podcast</h1>
      <PodcastList podcastEpisodes={podcastEpisodes} />
    </div>
  )
}

export const query = graphql`
  query {
    podcastEpisodes: allPodcastRssFeedEpisode {
      nodes {
        id
        item {
          title
          isoDate(formatString: "MM-DD-YYYY")
          itunes {
            image
          }
        }
      }
    }
  }
`
