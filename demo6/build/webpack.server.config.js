const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, '../src/entry-server.js'),
  // 告知 `vue-loader`  输送面向服务器代码(server-oriented code)
  target: 'node',
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.bundle.js'
  }
})
