import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '@/auth/store/authStore';
import filmsStore from '@/components/films/store/filmsStore';
import charactersStore from '@/components/characters/store/charactersStore';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authStore,
    filmsStore,
    charactersStore,
  },

  state: {},

  getters: {},

  actions: {},

  mutations: {},

});
