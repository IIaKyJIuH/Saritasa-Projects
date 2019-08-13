import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '@/core/auth/store/authStore';
import filmsStore from '@/core/services/films/store/filmsStore';
import charactersStore from '@/core/services/characters/store/charactersStore';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authStore,
    filmsStore,
    charactersStore,
***REMOVED***

  state: {},

  getters: {},

  actions: {},

  mutations: {},

});
