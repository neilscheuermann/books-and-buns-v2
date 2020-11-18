import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PodcastList from '../components/PodcastList'
import { TABLET_MAX_WIDTH } from '../styles/GlobalStyles'
import useReactResponsive from '../hooks/useReactResponsive'

export default function IndexPage({ data }) {
  const { isMobile } = useReactResponsive()
  const [isMobileTemp, setIsMobileTemp] = useState('')
  useEffect(() => {
    setIsMobileTemp(isMobile)
  }, [isMobile])

  return (
    <div>
      <MainSectionStyles>
        <Img
          fluid={data.mainBackgroundImg.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: isMobileTemp
              ? `var(--header-height-mobile)`
              : `var(--header-height)`,
            width: '100%',
            height: 'calc(100vh - var(--header-height))',
            zIndex: 0,
            boxShadow: 'none',
          }}
        />
        <p className="apply-max-width">
          We are an approachable way to elevate your novel. We believe fiction
          is a tool to access indistinct parts of our souls to find what truly
          lies within us. This tool allows us to find worlds beyond reality,
          emotions deeper than daily life, and come out with deeper beliefs. Our
          role is to journey with you through your discovery and refining
          processes. So your messages, plots, characters, and imagination can
          reach the people that need it.
        </p>
      </MainSectionStyles>
      <PodcastSectionStyles>
        <Link to="/podcasts/">
          <h1 className="center-text home-page-podcast-h1">Latest Podcasts</h1>
        </Link>
        <PodcastList podcastEpisodes={data.latestPodcastEpisodes.nodes} />
      </PodcastSectionStyles>
    </div>
  )
}

const MainSectionStyles = styled.div`
  height: calc(100vh - var(--header-height) - 32px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    position: relative;
    color: var(--white);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    padding: 1rem;
    line-height: 2;
  }
`

const PodcastSectionStyles = styled.div`
  background-color: var(--orange);
  padding: 3rem 0;
  color: var(--white);

  h1 {
    margin-top: 0;

    &.podcast-list-h1 {
      ${/* Mobile or Tablet */ ''}
      @media (max-width: ${TABLET_MAX_WIDTH}) {
        display: none;
      }
    }
  }
`

export const query = graphql`
  query {
    mainBackgroundImg: file(relativePath: { eq: "flower-sunlight.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    latestPodcastEpisodes: allPodcastRssFeedEpisode(limit: 3) {
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
