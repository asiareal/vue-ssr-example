import { createApp } from './app'
const { app, router, store } = createApp()
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// 代码分割应该使用onReady，否则客户端将遇到内容不匹配错误
router.onReady(() => {
  app.$mount('#app')
})
