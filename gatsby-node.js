const path = require('path')
const axios = require('axios')
const DOMParser = require('dom-parser')

const { slugify } = require('./src/utils/helpers')

const RSS_URL =
  'https://booksandbuns.libsyn.com/rss/?include-libsyn-metadata=true'

// Gatsby Node APIs
//

exports.createPages = async (params) => {
  await Promise.all([
    turnBlogPostsIntoPages(params),
    turnPodcastEpisodesIntoPages(params),
  ])
}

exports.sourceNodes = async (params) => {
  await fetchEpisodeIdsAndTurnIntoNodes(params)
}

// Helpers
//

async function fetchEpisodeIdsAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const parser = new DOMParser()
  const resp = await axios.get(RSS_URL)
  const rssFeedDocument = parser.parseFromString(resp.data, 'text/xml')
  rssFeedDocument
    .getElementsByTagName('item')
    .map((itemElement) => {
      const itemDocument = parser.parseFromString(
        itemElement.innerHTML,
        'text/html'
      )

      const title = itemDocument.getElementsByTagName('title')[0].textContent
      // NOTE>>>: Not sure why this isn't libsyn:itemId here, like it shows up in
      // the rss feed, https://booksandbuns.libsyn.com/rss/?include-libsyn-metadata=true
      const libsynItemId = itemDocument.getElementsByTagName('libsyn')[0]
        .textContent

      return { title, libsynItemId }
    })
    .forEach((itemObject) => {
      const nodeContent = JSON.stringify(itemObject)

      const nodeMeta = {
        id: createNodeId(
          `libsynParsedItem-libsynItemId-${itemObject.libsynItemId}`
        ),
        parent: null,
        children: [],
        internal: {
          type: `LibsynParsedItem`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(itemObject),
        },
      }

      // 3. Create a node for that beer
      const node = { ...itemObject, ...nodeMeta }
      actions.createNode(node)
    })
}

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
        title: item.title,
      },
    })
  })
}
