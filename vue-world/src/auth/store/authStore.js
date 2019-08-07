export default {
  state: {
    email: '',
    password: '',
  },

  getters: {
    getEmail: state => state.email,
    getPassword: state => state.password,
  },

  mutations: {
    setEmail(state, payload) {
      state.email = payload;
    },

    setPassword(state, payload) {
      state.password = payload;
    },
  },

  actions: {
    setEmail(context, payload) {
      context.commit('setEmail', payload);
    },

    setPassword(context, payload) {
      context.commit('setPassword', payload);
    },
  },
};
