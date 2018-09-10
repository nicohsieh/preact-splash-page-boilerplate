// rules
const getRules = () => {
  return [
    {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [
            require('autoprefixer')()
          ]
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false
        }
      }]
    }
  ]
}
//plugins
const getPlugins = () => {
  return []
}

module.exports = {
  getRules: getRules,
  getPlugins: getPlugins
}