import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import PodcastList from '../components/PodcastList'
import BlogList from '../components/BlogList'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'
import useReactResponsive from '../hooks/useReactResponsive'

export default function IndexPage({ data }) {
  const { isMobile } = useReactResponsive()
  const [isMobileTemp, setIsMobileTemp] = useState('')
  useEffect(() => {
    setIsMobileTemp(isMobile)
  }, [isMobile])

  return (
    <div>
      <IntroSection>
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
        <div className="intro-section-content apply-max-width">
          <div className="left-side">
            <p className="intro-text">
              We are an approachable way to elevate your novel. We believe
              fiction is a tool to access indistinct parts of our souls to find
              what truly lies within us. This tool allows us to find worlds
              beyond reality, emotions deeper than daily life, and come out with
              deeper beliefs. Our role is to journey with you through your
              discovery and refining processes. So your messages, plots,
              characters, and imagination can reach the people that need it.
            </p>
          </div>
          <div className="right-side">
            <div>Something profound</div>
            <div>Something else profound</div>
          </div>
        </div>
      </IntroSection>

      <GridListPreviewStyles className="podcast-list-section apply-max-width">
        <h1 className="center-text home-page-podcast-h1">
          <Link to="/podcasts/">Latest Podcasts</Link>
        </h1>
        <PodcastList podcastEpisodes={data.latestPodcastEpisodes.nodes} />
      </GridListPreviewStyles>

      <GridListPreviewStyles className="blog-list-section">
        <h1 className="center-text home-page-blog-h1">
          <Link to="/blog/">Latest Blog Posts</Link>
        </h1>
        <BlogList blogPosts={data.latestBlogPosts.edges} />
      </GridListPreviewStyles>

      <EditingPreviewSection></EditingPreviewSection>
    </div>
  )
}

const IntroSection = styled.div`
  height: calc(100vh - var(--header-height) - 32px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Everything expect the bg picture
  div.intro-section-content {
    position: relative;
    display: flex;
    justify-content: space-between;

    .left-side {
      max-width: 50%;

      .intro-text {
        line-height: 2;
        padding: 1rem;
        background-color: var(--white);
      }
    }

    .right-side {
      border: 1px solid white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      div {
        background-color: white;
      }
    }
  }
`

const GridListPreviewStyles = styled.div`
  padding: 3rem 0;

  &.podcast-list-section {
    background-color: var(--white);
  }

  &.blog-list-section {
    background-color: var(--orange-light);
    color: var(--white);
  }

  h1 {
    margin-top: 0;

    &.podcast-list-h1 {
      @media (max-width: ${MOBILE_MAX_WIDTH}) {
        display: none;
      }
    }
  }
`

const EditingPreviewSection = styled.div`
  background-color: var(--orange);
  height: 70vh;
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
    latestBlogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
