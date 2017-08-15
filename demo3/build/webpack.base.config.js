const path = require('path')
const vueConfig = require('./vue-loader.conf')

module.exports = {
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist')
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
  }
}
