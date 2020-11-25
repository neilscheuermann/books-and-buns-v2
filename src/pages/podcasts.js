import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import PodcastList from '../components/PodcastList'
import Layout from '../components/Layout'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function PodcastsPage({ data }) {
  // TODO>>>: Look into the difference between this hook and the one I had to
  // mess with for mobile queries.
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH})`)
  const podcastEpisodes = data.podcastEpisodes.nodes

  return (
    <Layout>
      <PageStyles className="apply-max-width">
        {isMobile && <h1 className="center-text ">Podcasts</h1>}
        <PodcastList podcastEpisodes={podcastEpisodes} />
      </PageStyles>
    </Layout>
  )
}

export const PageStyles = styled.div`
  padding-top: 4em;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 2em;
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
