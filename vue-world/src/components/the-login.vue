<template>
  <form class="login-form">
    <p>
      <label>Input your e-mail<br>
          <input class="form-input"
           type="email"
           placeholder="lololo@lalala.ru"
           v-model="emailIsValid"
           required
          >
      </label>
    </p>
    <p>
      <label>Input your password<br>
          <input class="form-input"
           type="password"
           placeholder="Password"
           minlength="3"
           v-model="passwordIsValid"
           required
          >
      </label>
    </p>

    <button type="submit"
     :disable="isDisabled"
    >
      Log in
    </button>

  </form>
</template>

<script>
    export default {
      name: 'TheLogin',
      data() {
        return {
          emailIsValid: false,
          passwordIsValid: false
        }
      },
      computed: {
        isDisabled() {
    	    return !this.emailIsValid || !this.passwordIsValid;
        }
      }
    }
</script>

<style>

  .login-form {
    margin-top: 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  input {
    margin: 10px 0;
    padding: 15px;

    font-size: 20px;
    border: 6px solid #585858;
    border-radius: 4px;
  }

  button {
    margin-top: 20px;
    width: 10%;
  }

  .alert {
      font-size: 1.25em;
  }

  .alert-danger {
      background-color: #f01815;
      opacity: .7;
  }

</style>
