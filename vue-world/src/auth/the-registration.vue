<template>
  <form @submit="registerUser">
    <p>
      <label>Input e-mail<br>
        <input
          type="email"
          placeholder="lololo@lalala.ru"
          v-model="password"
          required
        >
      </label>
    </p>
    <p>
      <label>Input password<br>
        <input
          type="password"
          placeholder="Password"
          minlength="3"
          v-model="password"
          required
        >
      </label>
    </p>
    <p>
      <label>Confirm password<br>
        <input
          type="password"
          placeholder="Password"
          minlength="3"
          v-model="passwordRepeat"
          required
        >
      </label>
    </p>

    <button
      class="register-btn"
      type="submit"
    >
      <!-- TODO: поправить валидацию! -->
      Register
    </button>
  </form>
</template>

<script>
import authStore from './store/authStore';

export default {
  name: 'Registration',

  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
  ***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  methods: {
    registerUser() {
      // TODO:
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  created: () => {
    // eslint-disable-next-line no-console
    console.log(authStore);
    this.email = authStore.state.email;
    this.password = authStore.state.password;
***REMOVED***
***REMOVED***
</script>

<style scoped>
.register-btn {
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  background-color: green;
  border: 2px solid gray;
  cursor: pointer;
}

.register-btn:hover {
  background-color: #555;
}

.register-btn:active {
  background-color: black;
}
</style>
