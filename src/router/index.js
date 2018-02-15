import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Login'
import Grid from '@/pages/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
