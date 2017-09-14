const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vueConfig = require('./vue-loader.conf')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd ? false : 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'src': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProd
  // make sure to add the plugin!
  ? [new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })]
  : []
}
