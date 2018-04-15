const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const short = require('postcss-short');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options:{
        postCssPlugins: [
          rucksack,
          cssnext,
          short,
        ],
        precision: 5,
      }
    },
  ],
}
