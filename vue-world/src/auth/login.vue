<template>
  <form @submit.prevent="login">
    <p>
      <label>Input e-mail<br>
        <input
          class="form-input"
          type="email"
          placeholder="lololo@lalala.ru"
          v-model="email"
          required
        >
      </label>
    </p>
    <p>
      <label>Input password<br>
        <input
          class="form-input"
          type="password"
          placeholder="Password"
          minlength="3"
          v-model="password"
          required
        >
      </label>
    </p>

    <footer>
      <button
        class="login-btn"
        type="submit"
      >
        <!-- TODO: поправить валидацию! -->
        Log in
      </button>
      <router-link
        class="register-btn"
        to="/register"
      >
        Register
      </router-link>
    </footer>

  </form>
</template>

<script>
// import authStore from './store/authStore';

export default {
  name: 'Login',

  data() {
    return {
      email: 'heh@mda.ru',
      password: 'lolkek',
    };
  },

  methods: {
    login() {
      this.$store.dispatch('setEmail', this.email);
      this.$store.dispatch('setPassword', this.password);
      console.log(this.$store.state.email);
      this.$router.push('/home');// `ll fix routings later
    },
  },
};
</script>

<style scoped>
.alert {
  font-size: 1.25em;
}

.alert-danger {
  background-color: #f01815;
  opacity: 0.7;
}

footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

footer > * {
  flex-basis: 1 1 0;
}

.login-btn,
.register-btn {
  color: white;
  padding: 1em 1.5em;
  border: 2px solid gray;
  text-decoration: none;
}

.login-btn {
  background-color: green;
  cursor: pointer;
}

.register-btn {
  margin-top: 20px;
  font-size: 13.3333px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: red;
}

.register-btn:hover,
.login-btn:hover {
  background-color: #555;
}

.register-btn:active,
.login-btn:active {
  background-color: black;
}
</style>
