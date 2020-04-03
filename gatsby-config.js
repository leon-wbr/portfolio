const languages = require('./src/intl/languages');

module.exports = {
  siteMetadata: {
    title: `Leon Weber`,
    description: `Personal website`,
    author: `Leon Weber`,
    languages,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
    resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`src/scss`],
      },
    },
    `gatsby-alias-imports`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1400,
              },
            },
          ]
      },
    },
    // Internationalization
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        pagesPaths: ['src/pages', 'src/markdown-pages'],
        markdownRemark: {
          postPage: 'src/templates/projectTemplate.js',
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                      langKey
                    }
                  }
                }
              }
            }
          `
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
