const path = require('path')
const { slugify } = require('./src/utils/helpers')

// Gatsby Node APIs
//

exports.createPages = async (params) => {
  await Promise.all([
    turnBlogPostsIntoPages(params),
    turnPodcastEpisodesIntoPages(params),
  ])
}

// Helpers
//

async function turnBlogPostsIntoPages({ graphql, actions, reporter }) {
  // 1. Get a template for this page
  const blogPostTemplate = path.resolve('./src/templates/BlogPostTemplate.js')

  // 2. Qeury all podcast episodes
  const result = await graphql(`
    {
      allMarkdownRemark(
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
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // 3. Loop over each podcast episodes and create a page for it
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { title } = node.frontmatter
    const slug = slugify(title)

    actions.createPage({
      path: `blog/${slug}`,
      component: blogPostTemplate,
      context: {
        title,
      },
    })
  })
}

async function turnPodcastEpisodesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const podcastEpisodeTemplate = path.resolve(
    './src/templates/PodcastEpisodeTemplate.js'
  )

  // 2. Qeury all podcast episodes
  const { data } = await graphql(`
    query {
      podcastEpisodes: allPodcastRssFeedEpisode {
        nodes {
          id
          item {
            title
          }
        }
      }
    }
  `)

  // 3. Loop over each podcast episodes and create a page for it
  data.podcastEpisodes.nodes.forEach(({ id, item }) => {
    const slug = slugify(item.title)

    actions.createPage({
      path: `podcasts/${slug}`,
      component: podcastEpisodeTemplate,
      context: {
        id,
      },
    })
  })
}
