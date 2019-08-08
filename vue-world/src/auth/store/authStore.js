import firebase from 'firebase';

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

    setAuthStatus(state, payload) {
      state.authState = payload;
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
***REMOVED*****REMOVED*****REMOVED***

    setAuthStatus(context, payload) {
      context.commit('setAuthStatus', payload);
***REMOVED*****REMOVED*****REMOVED***

    resetAuth(context) {
      context.commit('setEmail', '');
      context.commit('setAuthStatus', false);
      firebase.auth().signOut().then(
        (err) => {
          throw err;
    ***REMOVED*****REMOVED*****REMOVED***
      );
***REMOVED*****REMOVED*****REMOVED***

    loginToFirebase(context, payload) {
      const { email, password } = payload;
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        // eslint-disable-next-line no-unused-vars
        (request) => {
          context.commit('setAuthStatus', true);
          context.commit('setEmail', email);
    ***REMOVED*****REMOVED*****REMOVED***

        (err) => {
          throw err;
    ***REMOVED*****REMOVED*****REMOVED***
      );
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
