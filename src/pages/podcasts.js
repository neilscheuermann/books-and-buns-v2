import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import PodcastList from '../components/PodcastList'
import Layout from '../components/Layout'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function PodcastsPage({ data }) {
  const podcastEpisodes = data.podcastEpisodes.nodes

  return (
    <Layout>
      <PageStyles className="apply-max-width">
        <h1 className="center-text mobile-header">Podcasts</h1>
        <PodcastList podcastEpisodes={podcastEpisodes} />
      </PageStyles>
    </Layout>
  )
}

export const PageStyles = styled.div`
  padding-top: 4em;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 1.5em;
  }

  h1.mobile-header {
    display: none;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      margin-bottom: 0.5em;
      display: inherit;
    }
  }
`

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
