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
        feedURL: `https://booksandbuns.libsyn.com/rss`,
        id: 'guid',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
  ],
}
