import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { altText, date, featuredImage, title } = frontmatter

  return (
    <Layout>
      <BlogPostStyles className="apply-max-width-blog">
        <h1>{title}</h1>
        <p>{date}</p>
        <Img
          fluid={{
            ...featuredImage.childImageSharp.fluid,
            aspectRatio: 16 / 9,
          }}
          alt={altText}
        />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPostStyles>
    </Layout>
  )
}

const BlogPostStyles = styled.div`
  a {
    text-decoration: underline;
  }
`

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altText
      }
    }
  }
`
