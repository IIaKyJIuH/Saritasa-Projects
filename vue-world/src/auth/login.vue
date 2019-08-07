<template>
  <form
    @submit.prevent="login"
    @reset.prevent="register"
  >
    <p>
      <label>Input e-mail<br>
        <input
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
          type="password"
          placeholder="♥♥♥♥♥♥"
          minlength="3"
          v-model="password"
          required
        >
      </label>
    </p>

    <footer
      :class="$style.app_footer"
    >
      <button
        :class="$style.login_btn"
        type="submit"
      >
        <!-- TODO: поправить валидацию! -->
        Log in
      </button>
      <button
        :class="$style.register_btn"
        type="reset"
      >
        Register
      </button>
    </footer>

  </form>
</template>

<script>
import { mapActions } from 'vuex';

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
      this.setEmail(this.email);
      this.setPassword(this.password);
      this.toggleAuthStatus();
      this.$router.push('/home'); // `ll fix routings later
    },

    register() {
      this.setEmail(this.email);
      this.setPassword(this.password);
      console.log(this.$store);
      this.$router.push('/register');
    },

    ...mapActions([
      'toggleAuthStatus',
      'setEmail',
      'setPassword',
    ]),
  },
};
</script>

<style module>

footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

footer > * {
  flex-basis: 1 1 0;
}

button {
  color: white;
  padding: 1em 1.5em;
  border: 2px solid gray;
  text-decoration: none;
  cursor: pointer;
}

.login_btn {
  background-color: green;
}

.register_btn {
  margin-top: 20px;
  background-color: red;
}

button:hover {
  background-color: #555;
}

button:active {
  background-color: black;
}
</style>
