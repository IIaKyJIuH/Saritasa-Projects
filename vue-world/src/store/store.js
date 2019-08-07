import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authState: false,
***REMOVED***
  actions: {
    async toggleAuthStatus({ commit }) {
      commit('toggleAuthStatus');
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***
  mutations: {
    toggleAuthStatus(state) {
      // eslint-disable-next-line no-param-reassign
      state.authState = !state.authState;
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***
  getters: {
    isAuthenticated: state => state.authState,
***REMOVED***
});
