import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'

export default function PodcastList({ podcastEpisodes }) {
  return (
    <WrapperStyles className="apply-max-width">
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

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  a {
    padding: 0.3rem;

    &:hover {
      background-color: var(--link-background-hover);
      border-radius: 5px;
    }
  }
`
