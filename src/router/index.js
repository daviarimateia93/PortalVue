import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import Login from '@/pages/Login'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
