module.exports = {
    siteMetadata: {
        address: `Nu, 10-12 Fulham High Street, London, SW63LQ`,
        email: `enquiry@habituscapital.com`,
        telephone: `N/A`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `posts`,
              path: `${__dirname}/posts/`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `./site/content/`,
            },
        },
    ],
}