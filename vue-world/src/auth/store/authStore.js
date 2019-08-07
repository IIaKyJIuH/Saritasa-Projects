export default {
  state: {
    email: '',
    password: '',
***REMOVED***

  getters: {
    getEmail: state => state.email,
    getPassword: state => state.password,
***REMOVED***

  mutations: {
    setEmail(state, payload) {
      state.email = payload;
***REMOVED*****REMOVED*****REMOVED***

    setPassword(state, payload) {
      state.password = payload;
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
***REMOVED*****REMOVED*****REMOVED***

    setPassword(context, payload) {
      context.commit('setPassword', payload);
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***
***REMOVED***
