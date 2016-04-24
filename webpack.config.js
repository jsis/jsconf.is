// Only used by eslint to find and compile gatsby config.
require('babel-register')({
  only: /gatsby\/lib/,
})
const gatsbyConfig = require('./node_modules/gatsby/lib/utils/webpack.config')

module.exports = gatsbyConfig({}, __dirname, 'develop').resolve()
