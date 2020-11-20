const path = require('path')
const { slugify } = require('./src/utils/helpers')

// Gatsby Node APIs
//

exports.createPages = async (params) => {
  await Promise.all([turnPodcastEpisodesIntoPages(params)])
}

// Helpers
//

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
