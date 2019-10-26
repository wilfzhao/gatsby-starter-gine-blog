module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/0081571a09054f869a1d4ed2c53834eb?v=93dd60b91da3422880854a75471c7bb2"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/6b0c302433e146b68d4d633db84819ec?v=87ebfe009d4a41269128f003a86e65ac"
            }
        }
    ],
}
