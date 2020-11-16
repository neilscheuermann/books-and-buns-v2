export default {
  siteMetadata: {
    title: `Books and Buns`,
    siteUrl: 'http://www.booksandbuns.com',
    description: 'website for Books and Buns business',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://feed.podbean.com/booksandbuns/feed.xml`,
        id: 'guid',
      },
    },
  ],
}
