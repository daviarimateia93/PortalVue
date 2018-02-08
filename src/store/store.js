import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    userInfo: {
      user: '',
      userJWT: '',
      permissions: ''
    }
  },
  mutations: {
    setAuth (state, data) {
      state.user = data.user
      state.userJWT = data.jwt
      state.permissions = data.permissions
    }
  }
})
