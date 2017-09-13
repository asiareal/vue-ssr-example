const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, '../src/entry-client.js'),
  output: {
    filename: 'client.bundle.js'
  }
})
