import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '../auth/store/authStore';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authStore,
***REMOVED***

  state: {
    authState: false,
***REMOVED***

  getters: {
    isAuthenticated: state => state.authState,
***REMOVED***

  actions: {
    async toggleAuthStatus(context) {
      context.commit('toggleAuthStatus');
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  mutations: {
    toggleAuthStatus(state) {
      state.authState = !state.authState;
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

});
