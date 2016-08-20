exports.modifyWebpackConfig = function (config) {
  config.loader('jpg', {
    test: /\.jpg$/,
    loader: 'url?limit=10000',
  })

  config.loader('png', {
    test: /\.png$/,
    loader: 'url?limit=10000',
  })

  config.loader('pug', {
    test: /\.pug$/,
    loader: 'pug',
  })

  return config
}
