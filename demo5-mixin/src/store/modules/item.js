// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import Vue from 'vue'
import { fetchItem } from 'src/api'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  actions: {
    fetchItem ({ commit }, id) {
      // `store.dispatch()` 会返回 Promise，
      // 以便我们能够知道数据在何时更新
      return fetchItem(id, 'item').then(item => {
        commit('setItem', { id, item })
      })
    }
  },
  mutations: {
    setItem (state, { id, item }) {
      Vue.set(state.items, id, item)
    }
  }
}
