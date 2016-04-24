exports.modifyWebpackConfig = function (config) {
  config.loader('jpg', {
    test: /\.jpg$/,
    loader: 'url-loader?limit=10000',
  })

  config.loader('png', {
    test: /\.png$/,
    loader: 'url-loader?limit=10000',
  })

  return config
}
