import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { altText, date, featuredImage, title } = frontmatter

  return (
    <Layout>
      <BlogPostStyles className="apply-max-width-blog">
        <h1 className="center-text">{title}</h1>
        <p className="center-text">{date}</p>
        <Img
          className="gatsby-image"
          style={{
            margin: '2em 0',
          }}
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
  padding: 5em 0;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2em 0;
  }

  a {
    text-decoration: underline;
  }

  gatsby-image {
    padding: 2em 0;
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
