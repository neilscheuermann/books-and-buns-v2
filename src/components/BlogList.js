import React from 'react'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'

export default function BlogList({ blogPosts }) {
  return (
    <div>
      {blogPosts.map((blogPost) => {
        const { title } = blogPost.node.frontmatter
        const slug = slugify(title)

        return (
          <Link to={`/blog/${slug}`}>
            <div>
              <h2>{title}</h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
