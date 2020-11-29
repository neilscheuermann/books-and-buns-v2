import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import PodcastList from '../components/PodcastList'
import BlogList from '../components/BlogList'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'
import useReactResponsive from '../hooks/useReactResponsive'
import flowerSunlightImg from '../assets/images/flower-sunlight.jpg'

export default function IndexPage({ data }) {
  const { isMobile } = useReactResponsive()
  const [isMobileTemp, setIsMobileTemp] = useState('')
  useEffect(() => {
    setIsMobileTemp(isMobile)
  }, [isMobile])

  return (
    <Layout>
      <IntroSection>
        <div className="intro-section-content apply-max-width">
          <div className="left-side">
            <p>
              <span>We are</span> an approachable way to elevate your novel. We
              believe fiction is a tool to access indistinct parts of our souls
              to find what truly lies within us. This tool allows us to find
              worlds beyond reality, emotions deeper than daily life, and come
              out with deeper beliefs. Our role is to journey with you through
              your discovery and refining processes. So your messages, plots,
              characters, and imagination can reach the people that need it.
            </p>
          </div>
          <div className="right-side">
            <div>
              <p>
                "Challenges make life interesting, however overcoming them is
                what makes life meaningful."
              </p>
              <span>— Mark Twain</span>
            </div>
            <div>
              <p>
                If you want great editing tips weekly, {!isMobileTemp && <br />}{' '}
                we've got you covered.{' '}
              </p>
              <button>Coming soon...</button>
            </div>
          </div>
        </div>
      </IntroSection>

      <GridListPreviewStyles className="podcast-list-section apply-max-width">
        <h1 className="center-text">
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
    </Layout>
  )
}

const IntroSection = styled.div`
  height: calc(100vh - var(--header-height));

  background-image: url(${flowerSunlightImg});
  background-attachment: scroll;
  background-position: center;
  background-size: cover;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    height: unset;
    padding: 2em 1em;
  }

  // Everything expect the bg picture
  div.intro-section-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      flex-direction: column;
      height: unset;
    }

    .left-side {
      height: 80%;
      width: 45%;
      background-color: var(--white);
      display: flex;
      align-items: center;
      /* box-shadow: var(--box-shadow); */

      @media (max-width: ${MOBILE_MAX_WIDTH}) {
        width: auto;
      }

      p {
        font-size: 1.5em;
        line-height: 2;
        padding: 0 5rem;

        @media (max-width: ${MOBILE_MAX_WIDTH}) {
          padding: 0 1rem;
          font-size: 1.25em;
        }

        span {
          font-size: 1.5em;
          font-weight: 700;
          padding-right: 8px;
          line-height: 1;
        }
      }
    }

    .right-side {
      width: 45%;
      height: 90%;
      display: flex;
      flex-direction: column;

      @media (max-width: ${MOBILE_MAX_WIDTH}) {
        width: unset;
      }

      div:nth-child(1) {
        height: 25vh;
        background-color: var(--orange-light);
        margin-top: 80px;
        /* box-shadow: var(--box-shadow); */
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: ${MOBILE_MAX_WIDTH}) {
          height: unset;
          margin-top: 1em;
        }

        p {
          font-size: 1.8em;
          color: var(--black-gray);
          padding: 0 2em;
          margin-bottom: 0;

          @media (max-width: ${MOBILE_MAX_WIDTH}) {
            font-size: 1.5em;
            padding: 0 1em;
            margin-bottom: 1em;
          }
        }
        span {
          font-size: 1.8em;
          margin-right: 6em;
          margin-bottom: 1em;
          align-self: flex-end;

          @media (max-width: ${MOBILE_MAX_WIDTH}) {
            font-size: 1.5em;
            margin-right: 1em;
          }
        }
      }

      div:nth-child(2) {
        height: 25vh;
        background-color: var(--orange-light);
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width: ${MOBILE_MAX_WIDTH}) {
          height: unset;
          margin: 1em 0;
        }

        p {
          font-size: 2em;
          color: var(--white);
          margin-bottom: 0;

          @media (max-width: ${MOBILE_MAX_WIDTH}) {
            font-size: 1.5em;
            padding: 0 1em;
            margin-bottom: 1em;
          }
        }

        button {
          margin-right: 2em;
          margin-bottom: 1em;
          align-self: flex-end;
        }
      }
    }
  }
`

const GridListPreviewStyles = styled.div`
  padding: 3rem 0;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2rem 0;
  }

  h1 {
    padding-bottom: 0.5em;
  }

  &.podcast-list-section {
    background-color: var(--white);
  }

  &.blog-list-section {
    background-color: var(--orange-light);
    color: var(--white);
  }
`

export const query = graphql`
  query {
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
