import React from 'react'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'

export default function PodcastList({ podcastEpisodes }) {
  return (
    <div>
      {podcastEpisodes.map((episode) => {
        const slug = slugify(episode.item.title)

        return (
          <div key={episode.id}>
            <Link to={`/podcasts/${slug}`}>
              <h2>{episode.item.title}</h2>
            </Link>
            <div>{episode.item.isoDate}</div>
          </div>
        )
      })}
    </div>
  )
}
