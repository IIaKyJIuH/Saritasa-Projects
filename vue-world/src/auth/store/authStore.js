export default {
  state: {
    email: '',
    password: '',
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

    async setPassword(context, payload) {
      context.commit('setPassword', payload);
    },
  },
};
