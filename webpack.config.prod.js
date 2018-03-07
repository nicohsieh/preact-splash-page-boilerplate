const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProduction = (process.env.NODE_ENV === 'production')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  source: path.resolve(__dirname, 'source')
}


function getPlugins() {
  const plugins = []
  const copyPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve(PATHS.source, 'index.html'),
      to: PATHS.dist,
      flatten: true
    },
    {
      from: path.resolve(PATHS.source, 'images/*'),
      to: path.resolve(PATHS.dist, 'images'),
      flatten: true
    }
  ])
  plugins.push(copyPlugin)

  if (isProduction) {
    const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
    plugins.push(uglifyPlugin)
    plugins.push(new ExtractTextPlugin('styles.css'))
    plugins.push(new BundleAnalyzerPlugin())
  }
  return plugins
}

module.exports = {
  entry: path.resolve(PATHS.source, 'js/main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                ["@babel/preset-env", {
                  "loose": true
                }]
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
            , {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')()
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: path.resolve(PATHS.source, 'index.html'),
        to: PATHS.dist,
        flatten: true
      },
      {
        from: path.resolve(PATHS.source, 'images/*'),
        to: path.resolve(PATHS.dist, 'images'),
        flatten: true
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i
    }),
    new ExtractTextPlugin('styles.css'),
    new BundleAnalyzerPlugin()
  ],
  devtool: 'cheap-source-map'
}