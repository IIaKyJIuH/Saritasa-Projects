<template>
  <form
    :class="$style.registerForm"
    @submit.prevent="registerUser">

    <label
      :class="$style.inputContainer">
      Input e-mail
      <br>
      <input
        type="email"
        placeholder="lololo@lalala.ru"
        v-model.lazy="$v.email.$model">
      <span
        v-if="$v.email.$error"
        :class="$style.validationAlert">
        Нужен email в формате " lol@kek.ru "
      </span>
    </label>

    <label
      :class="$style.inputContainer">
      Input password
      <br>
      <input
        type="password"
        placeholder="♥♥♥♥♥♥"
        v-model.lazy="$v.password.$model">
      <span
        v-if="$v.password.$error"
        :class="$style.validationAlert">
        <template v-if="!$v.password.maxLength">
          Длина пароля не должна превышать {{ $v.password.$params.maxLength.max }} символов
        </template>
        <template v-else-if="!$v.password.minLength">
          Длина пароля не должна быть меньше {{ $v.password.$params.minLength.min }} символов
        </template>
        <template v-else>
          Пароль обязателен для заполнения
        </template>
      </span>
    </label>

    <label
      :class="$style.inputContainer">
      Confirm password
      <br>
      <input
        type="password"
        placeholder="♥♥♥♥♥♥"
        :disabled="!$v.password.required || $v.password.$error"
        v-model.lazy="$v.passwordRepeat.$model">
      <span
        v-if="$v.passwordRepeat.$error"
        :class="$style.validationAlert">
        <template v-if="!$v.passwordRepeat.sameAsPassword && !$v.password.$error">
          Пароли должны совпадать
        </template>
      </span>
    </label>

    <button
      :class="$style.registerBtn"
      type="submit">
      <!-- TODO: поправить валидацию! -->
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

  methods: {
    async registerUser() {
      await this.loginToFirebase({ email: this.email, password: this.password });
      this.$router.replace('/films');
***REMOVED*****REMOVED*****REMOVED***

    ...mapActions([
      'loginToFirebase',
    ]),

***REMOVED***

  computed: {
    ...mapGetters([
      'getEmail',
    ]),
***REMOVED***

  mounted() {
    this.email = this.getEmail;
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
