import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/Views/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/GoodsList',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
