import React from 'react'
import { graphql } from 'gatsby'
import BlogList from '../components/BlogList'

export default function BlogPage({ data }) {
  return (
    <div>
      <h1>The Books and Buns Blog</h1>
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
          }
        }
      }
    }
  }
`
