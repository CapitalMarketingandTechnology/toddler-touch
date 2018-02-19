import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    colors: {
      selected: 0,
      items: ['white', 'black', 'red', 'yellow', 'blue', 'green', 'purple', 'orange', 'brown', 'gray', 'pink']
    },
    letters: {
      selected: 0,
      items: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
    },
    numbers: {
      selected: 0,
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    selected: 'colors'
  },
  actions: {
    selectGroup ({commit}, group) {
      commit('selectGroup', group)
    },
    selectItem ({commit}, index) {
      commit('selectItem', index)
    }
  },
  mutations: {
    selectGroup (state, group) {
      Vue.set(state, 'selected', group)
    },
    selectItem (state, index) {
      Vue.set(state[state.selected], 'selected', index)
    }
  },
  getters: {
    selectedItems: (state) => state[state.selected].items,
    selectedItem: (state) => state[state.selected].items[state[state.selected].selected]
  }
})

export default store


// git push ssh://my_host/new_repo +topic1:master
// git push https://github.com/CapitalMarketingandTechnology/toddler-touch.git +toddlertouch:master