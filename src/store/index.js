import { createStore } from 'vuex'

export default createStore({
  state: {
    isHome: true
  },
  getters: {
  },
  mutations: {
    changeIsHome (state, bool) {
      state.isHome = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
