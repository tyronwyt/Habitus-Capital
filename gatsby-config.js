module.exports = {
    siteMetadata: {
        address: `Office 7, 35-37 Ludgate Hill, London, EC4M7JN`,
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