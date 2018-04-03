const state = {
  auth: {
    usuarioApelido: '',
    matriz: '',
    token: '',
    permissoes: []
  }
}
const getters = {
  userInfo (state) {
    return state.auth.usuarioApelido
  }
}
const mutations = {
  setAutenticacao (state, payload) {
    state.auth.usuarioApelido = payload.payload.usuarioApelido
    state.auth.token = payload.payload.token
    state.auth.matriz = payload.payload.matriz
    state.auth.permissoes = payload.payload.permissoes
  }
}
const actions = {
  setAutenticacao ({ commit }, payload) {
    commit({
      type: 'setAutenticacao',
      payload
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
