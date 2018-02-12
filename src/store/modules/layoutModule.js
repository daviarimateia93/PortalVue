const state = {
  menuStatus: false
}
const getters = {
  menuStatus: state => {
    return state.menuStatus
  }
}
const mutations = {
  menuToogle (state) {
    state.menuStatus = !state.menuStatus
  }
}
const actions = {}

export default {
  state,
  mutations,
  getters,
  actions
}
