import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'
import {
  TABLET_MAX_WIDTH,
  TABLET_MAX_WIDTH_PLUS_1,
} from '../styles/GlobalStyles'

export default function PodcastList({ podcastEpisodes }) {
  return (
    <WrapperStyles className="apply-max-width">
      <h1 className="center-text podcast-list-h1">Podcasts</h1>
      {podcastEpisodes.map((episode) => {
        const { title, itunes } = episode.item
        const slug = slugify(episode.item.title)

        return (
          <Link to={`/podcasts/${slug}`}>
            <div key={episode.id}>
              <h2 className="center-text">{title}</h2>
              <img src={itunes.image} alt={`${title} cover`} />
            </div>
          </Link>
        )
      })}
    </WrapperStyles>
  )
}

const WrapperStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${/* Mobile or Tablet */ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  h1 {
    margin: 0;
    ${/* Web */ ''}
    @media (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
      display: none;
    }
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;

    ${/* Mobile or Tablet */ ''}
    @media (max-width: ${TABLET_MAX_WIDTH}) {
      font-size: 1rem;
    }
  }

  a {
    padding: 0.3rem;

    &:hover {
      background-color: var(--link-background-hover);
      border-radius: 5px;
    }
  }
`
