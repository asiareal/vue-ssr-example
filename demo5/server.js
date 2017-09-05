// 服务端渲染源码结构demo
// 请参照：https://ssr.vuejs.org/zh/structure.html
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(resolve('index.template.html'), 'utf-8')
})
const context = {
  title: '路由和代码分割',
  meta: `
    <meta charset="UTF-8">
  `
}
const createApp = require(resolve('dist/server.bundle.js')).default

server.use('/dist', express.static(resolve('./dist')))

server.get('*', (req, res) => {
  const params = { url: req.url }
  createApp(params).then(app => {
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  }, err => {
    console.log(err)
    if (err.code === 404) {
      res.status(404).end('Page not found')
    } else {
      res.status(500).end('Internal Server Error')
    }
  })
})

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
