import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Auth'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
