<template>
  <form
    @submit.prevent="login"
    @reset.prevent="register">

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
        placeholder="♥♥♥♥♥♥"
        minlength="3"
        v-model="password"
        required>
    </label>

    <footer :class="$style.form_footer">
      <button
        :class="$style.login_btn"
        type="submit">
        <!-- TODO: поправить валидацию! -->
        Log in
      </button>

      <button
        :class="$style.register_btn"
        type="reset">
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
    async login() {
      await this.loginToFirebase({ email: this.email, password: this.password });
      this.$router.replace('/films');
    },

    register() {
      this.setEmail(this.email);
      this.$router.push('/register');
    },

    ...mapActions([
      'loginToFirebase',
      'setEmail',
    ]),
  },
};
</script>

<style module>

.form_footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.form_footer > * {
  flex-basis: 1 1 0;
  margin: 10px 0;
}

.login_btn,
.register_btn
{
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
  background-color: red;
}

.login_btn:hover,
.register_btn:hover
{
  background-color: #555;
}

.login_btn:active,
.register_btn:active
{
  background-color: black;
}

</style>
