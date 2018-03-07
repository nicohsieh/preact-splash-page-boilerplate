const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProduction = (process.env.NODE_ENV === 'production')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  source: path.resolve(__dirname, 'source')
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
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
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
    ])
  ],
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    inline: true,
    port: 8000
  },
  devtool: 'cheap-source-map'
}