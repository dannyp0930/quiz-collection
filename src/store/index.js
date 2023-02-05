import { createStore } from 'vuex'

export default createStore({
  state: {
    isHome: true,
    idiomStage: 0,
    idioms: [],
    idiomCnt: 0,
    idiomTime: 0
  },
  getters: {
  },
  mutations: {
    changeIsHome (state, bool) {
      state.isHome = bool
    },
    setIdiomStage (state, stage) {
      state.idiomStage = stage
    },
    setIdioms (state, arr) {
      state.idioms = arr
    },
    setIdiomCnt (state, cnt) {
      state.idiomCnt = cnt
    },
    setIdiomTime (state, time) {
      state.idiomTime = time
    }
  },
  actions: {
  },
  modules: {
  }
})
