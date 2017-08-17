import { createApp } from './app'
const { app, router } = createApp()
// 代码分割应该使用onReady，否则客户端将遇到内容不匹配错误
router.onReady(() => {
  app.$mount('#app')
})
