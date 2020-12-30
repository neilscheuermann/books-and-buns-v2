module.exports = {
  siteMetadata: {
    title: `Books and Buns`,
    siteUrl: 'https://booksandbuns.com/',
    description: 'An approachable way to elevate your novel',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://booksandbuns.libsyn.com/rss/?include-libsyn-metadata=true`,
        id: 'guid',
      },
    },
    // Add static assets before markdown files
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
            // gatsby-remark-relative-images must go before gatsby-remark-images
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'src/assets',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featured.skip'],
            },
          },
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
