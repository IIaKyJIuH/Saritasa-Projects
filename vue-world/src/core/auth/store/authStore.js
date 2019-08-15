import firebase from 'firebase';

export default {
  state: {
    email: null,
    authStatus: false,
    adminStatus: false,
  },

  getters: {
    getEmail: (state) => state.email,
    isAuthenticated: (state) => state.authStatus,
    isAdmin: (state) => state.adminStatus,
  },

  mutations: {

    setEmail(state, payload) {
      state.email = payload;
    },

    setAuthStatus(state, payload) {
      state.authStatus = payload;
    },

    setAdminStatus(state, payload) {
      state.adminStatus = payload;
    },

  },

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
    },

    setAuthStatus(context, payload) {
      context.commit('setAuthStatus', payload);
    },

    setAdminStatus(context, payload) {
      context.commit('setAdminStatus', payload);
    },

    async resetAuth(context) {
      await firebase.auth().signOut().then(
        () => {
          context.commit('setEmail', null);
          context.commit('setAuthStatus', false);
          context.commit('setAdminStatus', false);
        },
      );
    },

    async loginToFirebase(context, payload) {
      const { email, password } = payload;
      await firebase.auth().signInWithEmailAndPassword(email, password).then(
        // eslint-disable-next-line no-unused-vars
        (request) => {
          context.commit('setAuthStatus', true);
          context.commit('setEmail', email);
        },

        (err) => err,
      );
    },

    async registerInFirebase(context, payload) {
      const { email, password } = payload;
      await firebase.auth().createUserWithEmailAndPassword(email, password).then(
        // eslint-disable-next-line no-unused-vars
        (request) => {
          context.commit('setAuthStatus', true);
          context.commit('setEmail', email);
        },

        (err) => err,
      );
    },

    toggleAdminStatus({ commit, getters }) {
      if (getters.isAuthenticated) {
        commit('setAdminStatus', !getters.isAdmin);
      } else alert('You must login firstly');
    },

  },
};
