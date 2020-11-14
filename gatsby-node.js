import path from 'path'

// Gatsby Node APIs
//

export async function createPages(params) {
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

  // 3. TODO>>>: Create a podcasts list page

  // 4. Loop over each podcast episodes and create a page for it
  data.podcastEpisodes.nodes.forEach(({ id, item }) => {
    const slug = slugify(item.title)

    actions.createPage({
      path: `podcast/${slug}`,
      component: podcastEpisodeTemplate,
      context: {
        id,
      },
    })
  })
}

function slugify(string) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
