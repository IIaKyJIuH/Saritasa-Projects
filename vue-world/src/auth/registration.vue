<template>
  <form
    :class="$style.register_form"
    @submit.prevent="registerUser">

    <label>
      Input e-mail
      <br>
      <input
        type="email"
        placeholder="lololo@lalala.ru"
        v-model="email"
        required>
    </label>

    <label>
      Input password
      <br>
      <input
        type="password"
        placeholder="Password"
        minlength="3"
        v-model="password"
        required>
    </label>

    <label>
      Confirm password
      <br>
      <input
        type="password"
        placeholder="Password"
        minlength="3"
        v-model="passwordRepeat"
        required>
    </label>

    <button
      :class="$style.register_btn"
      type="submit">
      <!-- TODO: поправить валидацию! -->
      Register
    </button>

  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Registration',

  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
    };
  },

  methods: {
    async registerUser() {
      await this.loginToFirebase({ email: this.email, password: this.password });
      this.$router.replace('/films');
    },

    ...mapActions([
      'loginToFirebase',
    ]),

  },

  computed: {
    ...mapGetters([
      'getEmail',
    ]),
  },

  mounted() {
    this.email = this.getEmail;
  },
};
</script>

<style module>

.register_form {
  margin: auto 0;
}

.register_btn {
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  background-color: green;
  border: 2px solid gray;
  cursor: pointer;
  margin-top: 10px;
}

.register_btn:hover {
  background-color: #555;
}

.register_btn:active {
  background-color: black;
}

</style>
