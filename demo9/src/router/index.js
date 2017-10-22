import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Page1 = () => import('src/components/page1')
const Page2 = () => import('src/components/page2')

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/page1'},
      {path: '/page1', component: Page1},
      {path: '/page2', component: Page2}
    ]
  })
}
