module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Forty V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `8ogixj6g6dst`,
      accessToken: `471b6a4af2736a92b5fd4f44961aa4100f5c8e49055b0ac220330470a985e732`,
    },
  },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-offline'
  ],
}
