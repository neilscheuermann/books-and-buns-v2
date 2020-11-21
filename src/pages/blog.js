import React from 'react'
import { graphql } from 'gatsby'
import BlogList from '../components/BlogList'

export default function BlogPage({ data }) {
  return (
    <div>
      <BlogList blogPosts={data.blogPosts.edges} />
    </div>
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
