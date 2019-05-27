module.exports = {
  siteMetadata: {
    title: `Davi`,
    description: `David's Divi-alternate Components using React, MDX, and Gatsby.`,
    author: `@delster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
