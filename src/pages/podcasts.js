import React from 'react'
import { Link, graphql } from 'gatsby'
import { slugify } from '../utils/helpers'

export default function PodcastsPage({ data }) {
  const podcastEpisodes = data.podcastEpisodes.nodes

  return (
    <div>
      <h1>The Books and Buns Podcast</h1>
      {podcastEpisodes.map((episode) => {
        const slug = slugify(episode.item.title)

        return (
          <div>
            <Link to={`/podcast/${slug}`}>
              <h2>{episode.item.title}</h2>
            </Link>
            <div>{episode.item.isoDate}</div>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    podcastEpisodes: allPodcastRssFeedEpisode {
      nodes {
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
