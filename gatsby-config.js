module.exports = {
    siteMetadata: {
        address: `Office 7, 35-37 Ludgate Hill, London, EC4M7JN`,
        email: `invest@habituscapital.com`,
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
        // `gatsby-transformer-sharp`,
        // `gatsby-plugin-sharp`,
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `images`,
        //         path: `${__dirname}/static/`,
        //     }
        // }
    ],
}