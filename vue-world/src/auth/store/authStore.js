export default {
  state: {
    email: '',
    authState: false,
  },

  getters: {
    getEmail: state => state.email,
    isAuthenticated: state => state.authState,
  },

  mutations: {

    setEmail(state, payload) {
      state.email = payload;
    },

    setAuthOnUser(state, payload) {
      state.authState = payload !== undefined;
    },

  },

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
    },

    async setAuthOnUser(context, payload) {
      context.commit('setAuthOnUser', payload);
    },

  },
};
