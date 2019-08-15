<template>
  <form
    :class="$style.loginForm"
    @submit.prevent="login"
    @reset.prevent="register">
    <label :class="$style.inputContainer">
      Input e-mail
      <br>
      <input
        v-model.lazy="$v.email.$model"
        type="email"
        placeholder="lololo@lalala.ru">
      <span
        v-if="$v.email.$error"
        :class="$style.validationAlert">
        Correct email format - "lol@kek.ru"
      </span>
    </label>


    <label :class="$style.inputContainer">
      Input password
      <br>
      <input
        v-model.lazy="$v.password.$model"
        type="password"
        placeholder="♥♥♥♥♥♥">
      <span
        v-if="$v.password.$error"
        :class="$style.validationAlert">
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
   ***REMOVED*****REMOVED***
***REMOVED***

  validations: {
    email: {
      required,
      email,
 ***REMOVED*****REMOVED***
    password: {
      required,
      maxLength: maxLength(10),
      minLength: minLength(3),
 ***REMOVED*****REMOVED***
***REMOVED***

  methods: {
    async login() {
      await this.loginToFirebase({ email: this.email, password: this.password });
      this.$router.replace('/films');
 ***REMOVED*****REMOVED***

    register() {
      this.setEmail(this.email);
      this.$router.push('/register');
 ***REMOVED*****REMOVED***

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
