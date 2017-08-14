// 服务端选项，生命钩子函数测试
// 请参照：https://ssr.vuejs.org/zh/universal.html

const Vue = require('vue')
const app = new Vue({
  template: `<p>请查看node终端日志</p>`,
  beforeCreate: function () {
    console.log('>>>> beforeCreate 被调用')
  },
  created: function () {
    console.log('>>>> created 被调用')
  },
  beforeMount: function () {
    // 未执行
    console.log('>>>> beforeMount 被调用')
  },
  mounted: function () {
    // 未执行
    console.log('>>>> mounted 被调用')
  }
})
const renderer = require('vue-server-renderer').createRenderer()
renderer.renderToString(app, (err, html) => {
  if (err) throw err
})
