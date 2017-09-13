<template>
  <h2>{{ item && item.title }}</h2>
</template>
<script>
import otherItemStoreModule from 'src/store/modules/other-item'
export default {
  asyncData ({ store, route }) {
    console.log('asyncData')
    store.registerModule('otherItem', otherItemStoreModule)
    // 触发 action 后，会返回 Promise
    return store.dispatch('otherItem/fetchItem', route.params.id)
  },
  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed () {
    this.$store.unregisterModule('otherItem')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state['otherItem'].items[this.$route.params.id]
    }
  }
}
</script>
