require("dotenv").config()

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Energy Smart`,
    author: `@stelly.dev`,
    siteUrl: `https://energy-smart.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    "gatsby-source-sanity-transform-images",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KBWWQ75`,
        defaultDataLayer: { playform: `gatsby` },
      },
    },

    // {
    //   resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    //   options: {
    //     // Fields to index
    //     fields: [`title`, `content`],
    //     // How to resolve each fields value for a supported node type
    //     resolvers: {

    //     }
    //   }
    // }
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `pages`,
        engine: `flexsearch`,
        engineOptions: `speed`,
        query: `
    {
      allSanityPage {
        edges {
          node {
            id
            pageName
            _rawContent(resolveReferences: { maxDepth: 20 })
          }
        }
      }
    }
        `,
      },
    },
  ],
}
