<template>
  <form @submit="registerUser">
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
      :class="$style.register_btn"
      type="submit"
    >
      <!-- TODO: поправить валидацию! -->
      Register
    </button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

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

  computed: {
    ...mapGetters([
      'getEmail',
      'getPassword',
    ]),
***REMOVED***

  mounted: () => {
    // console.log(this.$store);
    this.email = this.getEmail;
    console.log(this.email);
    this.password = this.getPassword;
***REMOVED***
***REMOVED***
</script>

<style module>
.register_btn {
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  background-color: green;
  border: 2px solid gray;
  cursor: pointer;
}

.register_btn:hover {
  background-color: #555;
}

.register_btn:active {
  background-color: black;
}
</style>
