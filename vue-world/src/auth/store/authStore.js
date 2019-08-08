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

    toggleAuthStatus(state) {
      state.authState = !state.authState;
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
***REMOVED*****REMOVED*****REMOVED***

    async toggleAuthStatus(context) {
      context.commit('toggleAuthStatus');
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
