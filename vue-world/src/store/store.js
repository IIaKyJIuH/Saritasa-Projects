import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '../auth/store/authStore';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authStore,
  },

  state: {
    authState: false,
  },

  getters: {
    isAuthenticated: state => state.authState,
  },

  actions: {
    async toggleAuthStatus(context) {
      context.commit('toggleAuthStatus');
    },
  },

  mutations: {
    toggleAuthStatus(state) {
      state.authState = !state.authState;
    },
  },

});
