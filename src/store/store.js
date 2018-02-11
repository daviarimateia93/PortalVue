import Vuex from 'vuex'

import loginModule from './modules/loginModule'
import layoutModule from './modules/layoutModule'

export const store = new Vuex.Store({
  modules: {
    login: loginModule,
    layout: layoutModule
  }
})
