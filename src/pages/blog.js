import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import SEO from '../components/SEO'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'
import { PageStyles } from './podcasts'

export default function BlogPage({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageStyles className="apply-min-height bg-orange-light">
        <h1 className="center-text mobile-header">Blog Posts</h1>
        <BlogList blogPosts={data.blogPosts.edges} />
      </PageStyles>
    </Layout>
  )
}

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
