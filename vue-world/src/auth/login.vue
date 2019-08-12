<template>
  <form
    :class="$style.loginForm"
    @submit.prevent="login"
    @reset.prevent="register">

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
        Нужен email в формате "lol@kek.ru"
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


    <footer :class="$style.formFooter">
      <button
        :class="$style.loginBtn"
        type="submit"
        :disabled="$v.$invalid">
        Log in
      </button>

      <button
        :class="$style.registerBtn"
        type="reset">
        Register
      </button>
    </footer>

  </form>
</template>

<script>
import { mapActions } from 'vuex';
import {
  required, maxLength, minLength, email,
} from 'vuelidate/lib/validators';

export default {
  name: 'Login',

  data() {
    return {
      email: 'heh@mda.ru',
      password: 'lolkek',
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
***REMOVED***

  methods: {
    async login() {
      await this.loginToFirebase({ email: this.email, password: this.password });
      this.$router.replace('/films');
***REMOVED*****REMOVED*****REMOVED***

    register() {
      this.setEmail(this.email);
      this.$router.push('/register');
***REMOVED*****REMOVED*****REMOVED***

    ...mapActions([
      'loginToFirebase',
      'setEmail',
    ]),
***REMOVED***
***REMOVED***
</script>

<style module>

.loginForm {
  margin: auto 0;
}

.formFooter {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.formFooter >***REMOVED*** {
  flex-basis: 1 1 0;
  margin: 10px 0;
}

.loginBtn,
.registerBtn
{
  color: white;
  padding: 1em 1.5em;
  border: 2px solid gray;
  text-decoration: none;
  cursor: pointer;
}

.loginBtn {
  background-color: green;
}

.registerBtn {
  background-color: red;
}

.loginBtn:hover,
.registerBtn:hover
{
  background-color: #555;
}

.loginBtn:active,
.registerBtn:active
{
  background-color: black;
}

.loginBtn:disabled {
  background-color: rgb(122, 122, 122);
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
