import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import PodcastPlayer from '../components/PodcastPlayer'

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
