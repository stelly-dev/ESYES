require("dotenv").config()

/* TODO 
  Determine if we need to use 
  gatsby plugin sharp or gatsby transformer sharp

  gatsby source filesystem?

  gatsby plugin manifest?

*/

module.exports = {
  siteMetadata: {
    title: `Energy Smart`,
    author: `@stelly.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
}
