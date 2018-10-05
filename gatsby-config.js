module.exports = {
    siteMetadata: {
        address: `Office 7, 35-37 Ludgate Hill, London, EC4M7JN`,
        email: `invest@habituscapital.com`,
        telephone: `N/A`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}