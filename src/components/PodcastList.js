import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function PodcastList({ podcastEpisodes }) {
  return (
    <>
      <GridStyles>
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
    </>
  )
}

export const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  h2 {
    font-size: 1.7rem;
    margin-bottom: 1rem;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1rem;
    }
  }
`
