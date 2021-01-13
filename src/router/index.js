import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default new Router({
  routes:[
    // 默认路径
    {
      path: '/',
      redirect: '/msite'
    },
    // 一级路由
    {
      path: '/msite',
      component: MSite,
      meta: {
       showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
       showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
       showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
       showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
