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

    toggleAuthStatus(state) {
      state.authState = !state.authState;
    },

  },

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
    },

    async toggleAuthStatus(context) {
      context.commit('toggleAuthStatus');
    },

  },
};
