const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

// rules
const getRules = () => {
  return [{
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: false,
          minimize: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: false
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [
            require('autoprefixer')()
          ]
        }
      }
      ]
    })
  }, {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: false,
          minimize: true,
          url: false
        }
      }]
    })
  }]
}
// plugins

const getPlugins = () => {
  return [
    new CleanWebpackPlugin(['./dist']),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i
    }),
    new ExtractTextPlugin('styles.[hash].css'),
    new BundleAnalyzerPlugin()
  ]
}

module.exports = {
  getRules: getRules,
  getPlugins: getPlugins
}