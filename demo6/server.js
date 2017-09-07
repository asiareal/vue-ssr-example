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
  title: '源码结构',
  meta: `
    <meta charset="UTF-8">
  `
}
const createApp = require(resolve('dist/server.bundle.js')).default

server.use('/dist', express.static(resolve('./dist')))

server.get('*', (req, res) => {
  const app = createApp()
  // 将vue对象渲染成字符串，插到指定地方 <!--vue-ssr-outlet-->
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
