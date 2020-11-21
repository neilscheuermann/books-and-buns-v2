import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../utils/helpers'
import { GridStyles } from './PodcastList'

export default function BlogList({ blogPosts }) {
  return (
    <GridStyles>
      {blogPosts.map((blogPost) => {
        const { featuredImage, title } = blogPost.node.frontmatter
        const slug = slugify(title)

        return (
          <Link key={title} to={`/blog/${slug}`}>
            <div>
              <h2 className="center-text">{title}</h2>
              {/* <img src={itunes.image} alt={`${title} cover`} /> */}
              <Img
                fluid={{
                  ...featuredImage.childImageSharp.fluid,
                  aspectRatio: 16 / 9,
                }}
              />
            </div>
          </Link>
        )
      })}
    </GridStyles>
  )
}
