import React from 'react'
import { graphql } from 'gatsby'
import PodcastList from '../components/PodcastList'
import Layout from '../components/Layout'

export default function PodcastsPage({ data }) {
  const podcastEpisodes = data.podcastEpisodes.nodes

  return (
    <Layout>
      <div className="apply-max-width">
        <PodcastList podcastEpisodes={podcastEpisodes} />
      </div>
    </Layout>
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
