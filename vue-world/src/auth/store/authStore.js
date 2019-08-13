import firebase from 'firebase';

export default {
  state: {
    email: '',
    authStatus: false,
***REMOVED***

  getters: {
    getEmail: state => state.email,
    isAuthenticated: state => state.authStatus,
***REMOVED***

  mutations: {

    setEmail(state, payload) {
      state.email = payload;
***REMOVED*****REMOVED*****REMOVED***

    setAuthStatus(state, payload) {
      state.authStatus = payload;
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
***REMOVED*****REMOVED*****REMOVED***

    setAuthStatus(context, payload) {
      context.commit('setAuthStatus', payload);
***REMOVED*****REMOVED*****REMOVED***

    async resetAuth(context) {
      await firebase.auth().signOut().then(
        () => {
          context.commit('setEmail', '');
          context.commit('setAuthStatus', false);
    ***REMOVED*****REMOVED*****REMOVED***
      );
***REMOVED*****REMOVED*****REMOVED***

    async loginToFirebase(context, payload) {
      const { email, password } = payload;
      await firebase.auth().signInWithEmailAndPassword(email, password).then(
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

    async registerInFirebase(context, payload) {
      const { email, password } = payload;
      await firebase.auth().createUserWithEmailAndPassword(email, password).then(
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
