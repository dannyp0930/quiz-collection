import { createStore } from 'vuex'

export default createStore({
  state: {
    isHome: true,
    idioms: [],
    idiomTime: 5
  },
  getters: {
  },
  mutations: {
    changeIsHome (state, bool) {
      state.isHome = bool
    },
    setIdioms (state, arr, time) {
      state.idioms = arr
      state.idiomTime = time
    }
  },
  actions: {
  },
  modules: {
  }
})
