import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Item = () => import('src/components/item')
const OtherItem = () => import('src/components/other-item')

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/item/1'},
      {path: '/item/:id', component: Item},
      {path: '/other-item/:id', component: OtherItem}
    ]
  })
}
