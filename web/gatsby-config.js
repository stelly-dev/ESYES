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
        defaultDataLayer: {playform: `gatsby`}
      }
    }, 

  ],
}
