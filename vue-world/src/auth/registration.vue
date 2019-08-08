<template>
  <form
    @submit="registerUser"
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
import { firebase } from 'firebase';

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
    registerUser: () => {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user.toString());
        },
        (err) => {
          throw err;
        },
      );
    },

  },

  computed: {
    ...mapGetters([
      'getEmail',
      'getPassword',
    ]),
  },

  mounted: () => {
    this.email = this.getEmail;
  },
};
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
