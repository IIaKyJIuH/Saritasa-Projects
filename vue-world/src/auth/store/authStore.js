import firebase from 'firebase';

export default {
  state: {
    email: '',
    authStatus: false,
  },

  getters: {
    getEmail: state => state.email,
    isAuthenticated: state => state.authStatus,
  },

  mutations: {

    setEmail(state, payload) {
      state.email = payload;
    },

    setAuthStatus(state, payload) {
      state.authStatus = payload;
    },

  },

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
    },

    setAuthStatus(context, payload) {
      context.commit('setAuthStatus', payload);
    },

    async resetAuth(context) {
      await firebase.auth().signOut().then(
        () => {
          context.commit('setEmail', '');
          context.commit('setAuthStatus', false);
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

        (err) => {
          throw err;
        },
      );
    },

  },
};
