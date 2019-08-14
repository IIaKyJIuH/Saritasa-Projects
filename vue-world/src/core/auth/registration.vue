<template>
  <form
    :class="$style.registerForm"
    @submit.prevent="registerUser"
  >
    <label
      :class="$style.inputContainer"
    >
      Input e-mail
      <br>
      <input
        v-model.lazy="$v.email.$model"
        type="email"
        placeholder="lololo@lalala.ru"
      >
      <span
        v-if="$v.email.$error"
        :class="$style.validationAlert"
      >
        Correct email format - "lol@kek.ru"
      </span>
    </label>

    <label
      :class="$style.inputContainer"
    >
      Input password
      <br>
      <input
        v-model.lazy="$v.password.$model"
        type="password"
        placeholder="♥♥♥♥♥♥"
      >
      <span
        v-if="$v.password.$error"
        :class="$style.validationAlert"
      >
        <template v-if="!$v.password.maxLength">
          Password length shouldn`t be more than {{ $v.password.$params.maxLength.max }} symbols
        </template>
        <template v-else-if="!$v.password.minLength">
          Password length shouldn`t be less than {{ $v.password.$params.minLength.min }} symbols
        </template>
        <template v-else>
          Password is required!
        </template>
      </span>
    </label>

    <label
      :class="$style.inputContainer"
    >
      Confirm password
      <br>
      <input
        v-model.lazy="$v.passwordRepeat.$model"
        type="password"
        placeholder="♥♥♥♥♥♥"
        :disabled="!$v.password.required || $v.password.$error"
      >
      <span
        v-if="$v.passwordRepeat.$error"
        :class="$style.validationAlert"
      >
        <template v-if="!$v.passwordRepeat.sameAsPassword && !$v.password.$error">
          Passwords should be identical
        </template>
      </span>
    </label>

    <button
      :class="$style.registerBtn"
      :disabled="$v.$invalid"
      type="submit"
    >
      Register
    </button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
  required, maxLength, minLength, email, sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'Registration',

  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
  ***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  validations: {
    email: {
      required,
      email,
***REMOVED*****REMOVED*****REMOVED***
    password: {
      required,
      maxLength: maxLength(10),
      minLength: minLength(3),
***REMOVED*****REMOVED*****REMOVED***
    passwordRepeat: {
      required,
      sameAsPassword: sameAs('password'),
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  computed: {
    ...mapGetters([
      'getEmail',
    ]),
***REMOVED***

  mounted() {
    this.email = this.getEmail;
***REMOVED***

  methods: {
    async registerUser() {
      await this.registerInFirebase({ email: this.email, password: this.password });
      this.$router.replace('/films');
***REMOVED*****REMOVED*****REMOVED***

    ...mapActions([
      'registerInFirebase',
    ]),

***REMOVED***
***REMOVED***
</script>

<style module>

.registerForm {
  margin: auto 0;
}

.registerBtn {
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  background-color: green;
  border: 2px solid gray;
  cursor: pointer;
  margin-top: 10px;
}

.registerBtn:hover {
  background-color: #555;
}

.registerBtn:active {
  background-color: black;
}

.inputContainer {
  margin: 10px 0;
}

.validationAlert {
  font-size: 1.2em;
  display: block;
  background-color: red;
  color: white;
}

</style>
