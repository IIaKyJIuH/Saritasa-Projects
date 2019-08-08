export default {
  state: {
    email: '',
    authState: false,
***REMOVED***

  getters: {
    getEmail: state => state.email,
    isAuthenticated: state => state.authState,
***REMOVED***

  mutations: {

    setEmail(state, payload) {
      state.email = payload;
***REMOVED*****REMOVED*****REMOVED***

    toggleAuthStatus(state, payload) {
      state.authState = payload !== undefined;
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
***REMOVED*****REMOVED*****REMOVED***

    async toggleAuthStatus(context, payload) {
      context.commit('toggleAuthStatus', payload);
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
