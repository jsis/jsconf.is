// Only used by eslint to find and compile gatsby config.
/*
 * This file is here until this gets supported:
 */
try {
  require('babel-register')({
    only: /gatsby\/lib/,
  })
  const gatsbyConfig = require('./node_modules/gatsby/lib/utils/webpack.config')

  module.exports = gatsbyConfig({}, __dirname, 'develop').resolve()
} catch (err) {
  // temporary
  console.log(err)
}
