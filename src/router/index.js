import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Grid from '@/pages/Grid'
import Dialog from '@/pages/Dialog'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dialog',
      name: 'Dialog Test',
      component: Dialog
    }
  ]
})
