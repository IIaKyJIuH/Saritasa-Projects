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

    toggleAuthStatus(state, payload) {
      state.authState = payload !== undefined;
    },

  },

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
    },

    async toggleAuthStatus(context, payload) {
      context.commit('toggleAuthStatus', payload);
    },

  },
};
