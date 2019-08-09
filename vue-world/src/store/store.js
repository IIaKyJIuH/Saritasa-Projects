import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '../auth/store/authStore';
import filmsStore from '../components/films/store/filmsStore';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authStore,
    filmsStore,
  },

  state: {
  },

  getters: {
  },

  actions: {
  },

  mutations: {
  },

});
