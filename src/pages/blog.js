import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function BlogPage({ data }) {
  return (
    <Layout>
      <PageStyles className="apply-min-height bg-orange-light">
        <BlogList blogPosts={data.blogPosts.edges} />
      </PageStyles>
    </Layout>
  )
}

export const PageStyles = styled.div`
  padding-top: 4em;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 2em;
  }
`

export const query = graphql`
  query {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
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
