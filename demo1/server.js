// 服务端渲染基本用法
// 请参照：https://ssr.vuejs.org/zh/basic.html

const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./demo1/index.template.html', 'utf-8')
})
const context = {
  title: 'hello',
  meta: `
    <meta charset="UTF-8">
  `
}
server.get('*', (req, res) => {
  // 新建vue对象
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  // 将vue对象渲染成字符串，插到指定地方 <!--vue-ssr-outlet-->
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})
server.listen(8080)
