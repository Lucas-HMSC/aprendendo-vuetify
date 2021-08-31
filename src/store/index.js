import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
  },
  mutations: {
    UPDATE_SEARCH(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    updateSearch(context, payload) {
      context.commit('UPDATE_SEARCH', payload);
    },
  },
  modules: {
  }
})
