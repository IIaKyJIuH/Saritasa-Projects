<template>
  <form
    @submit.prevent="registerUser"
  >

    <label>
      Input e-mail
      <br>
      <input
        type="email"
        placeholder="lololo@lalala.ru"
        v-model="email"
        required
      >
    </label>

    <label>
      Input password
      <br>
      <input
        type="password"
        placeholder="Password"
        minlength="3"
        v-model="password"
        required
      >
    </label>

    <label>
      Confirm password
      <br>
      <input
        type="password"
        placeholder="Password"
        minlength="3"
        v-model="passwordRepeat"
        required
      >
    </label>

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
import firebase from 'firebase';

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
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        // eslint-disable-next-line no-unused-vars
        (user) => {
          this.$router.push('/films');
    ***REMOVED*****REMOVED*****REMOVED***

        (err) => {
          throw err;
    ***REMOVED*****REMOVED*****REMOVED***
      );
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***

  computed: {
    ...mapGetters([
      'getEmail',
      'getPassword',
    ]),
***REMOVED***

  mounted() {
    this.email = this.getEmail;
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
  margin-top: 10px;
}

.register_btn:hover {
  background-color: #555;
}

.register_btn:active {
  background-color: black;
}

</style>
