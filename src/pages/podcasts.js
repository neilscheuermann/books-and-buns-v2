import React from 'react'
import { graphql } from 'gatsby'
import PodcastList from '../components/PodcastList'

export default function PodcastsPage({ data }) {
  const podcastEpisodes = data.podcastEpisodes.nodes

  return (
    <div className="apply-max-width">
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
          itunes {
            image
          }
        }
      }
    }
  }
`
