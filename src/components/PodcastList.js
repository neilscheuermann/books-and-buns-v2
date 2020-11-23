import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'
import { MOBILE_MAX_WIDTH, WEB_MIN_WIDTH } from '../styles/GlobalStyles'

export default function PodcastList({ podcastEpisodes }) {
  return (
    <GridStyles>
      <h1 className="center-text podcast-list-h1">Podcasts</h1>
      {podcastEpisodes.map((episode) => {
        const { title, itunes } = episode.item
        const slug = slugify(episode.item.title)

        return (
          <Link key={episode.id} to={`/podcasts/${slug}`}>
            <div>
              <h2 className="center-text">{title}</h2>
              <img src={itunes.image} alt={`${title} cover`} />
            </div>
          </Link>
        )
      })}
    </GridStyles>
  )
}

export const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  h1 {
    margin: 0;
    @media (min-width: ${WEB_MIN_WIDTH}) {
      display: none;
    }
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1rem;
    }
  }
`
