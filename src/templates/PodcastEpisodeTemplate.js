import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import PodcastPlayer from '../components/PodcastPlayer'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function PodcastEpisodeTemplate({ data }) {
  const podcastEpisode = data.podcastEpisode.item
  const { title, isoDate, content, itunes } = podcastEpisode
  const { libsynItemId } = data.libsynParsedItem

  return (
    <Layout>
      <PodcastStyles className="apply-max-width-blog">
        <h1>{title}</h1>
        <p>{isoDate}</p>
        <PodcastPlayer episodeId={libsynItemId} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PodcastStyles>
    </Layout>
  )
}

const PodcastStyles = styled.div`
  padding-top: 5em;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 2em;
  }

  a {
    text-decoration: underline;
  }

  iframe {
    margin: 1em 0;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      margin: unset;
    }
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
