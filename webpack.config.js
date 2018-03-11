// this config file contains the shared definition between dev and prod
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProduction = (process.env.NODE_ENV === 'production')

const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  source: path.resolve(__dirname, 'source')
}

// bring in custom config 

const customConfig = isProduction ? require('./webpack.config.prod') : require('./webpack.config.dev')
const customRules = customConfig.getRules()
const customPlugins = customConfig.getPlugins(PATHS)


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
      ...customRules
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'source/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(PATHS.source, 'assets/images/'),
        to: path.resolve(PATHS.dist, 'assets/images'),
        ignore: ['.gitkeep'],
        flatten: true
      },
      {
        from: path.resolve(PATHS.source, 'assets/fonts/'),
        to: path.resolve(PATHS.dist, 'assets/fonts'),
        ignore: ['.gitkeep'],
        flatten: true
      }
    ]),
    ...customPlugins
  ],
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    inline: true,
    port: 8000
  },
  devtool: 'cheap-source-map',
}