module.exports = {
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/blog`,
        name: 'markdown-pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
}
