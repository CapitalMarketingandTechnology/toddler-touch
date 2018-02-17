import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: {
      title: 'Welcome to CMT Vue'
    }
  },
  getters: {
    homeTitle: (state) => state.home.title
  }
})
