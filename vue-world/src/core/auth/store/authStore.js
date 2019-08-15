import firebase from 'firebase';

export default {
  state: {
    email: null,
    authStatus: false,
    adminStatus: false,
***REMOVED***

  getters: {
    getEmail: (state) => state.email,
    isAuthenticated: (state) => state.authStatus,
    isAdmin: (state) => state.adminStatus,
***REMOVED***

  mutations: {

    setEmail(state, payload) {
      state.email = payload;
***REMOVED*****REMOVED*****REMOVED***

    setAuthStatus(state, payload) {
      state.authStatus = payload;
***REMOVED*****REMOVED*****REMOVED***

    setAdminStatus(state, payload) {
      state.adminStatus = payload;
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
***REMOVED*****REMOVED*****REMOVED***

    setAuthStatus(context, payload) {
      context.commit('setAuthStatus', payload);
***REMOVED*****REMOVED*****REMOVED***

    setAdminStatus(context, payload) {
      context.commit('setAdminStatus', payload);
***REMOVED*****REMOVED*****REMOVED***

    async resetAuth(context) {
      await firebase.auth().signOut().then(
        () => {
          context.commit('setEmail', null);
          context.commit('setAuthStatus', false);
          context.commit('setAdminStatus', false);
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

        (err) => err,
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

        (err) => err,
      );
***REMOVED*****REMOVED*****REMOVED***

    toggleAdminStatus({ commit, getters }) {
      if (getters.isAuthenticated) {
        commit('setAdminStatus', !getters.isAdmin);
      } else alert('You must login firstly');
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
