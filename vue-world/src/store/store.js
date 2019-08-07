import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authState: false,
  },
  actions: {
    async toggleAuthStatus({ commit }) {
      commit('toggleAuthStatus');
    },
  },
  mutations: {
    toggleAuthStatus(state) {
      // eslint-disable-next-line no-param-reassign
      state.authState = !state.authState;
    },
  },
  getters: {
    isAuthenticated: state => state.authState,
  },
});
