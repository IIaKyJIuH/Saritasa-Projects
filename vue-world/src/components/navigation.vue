<template>
  <nav>
    <ul :class="$style.navList">
      <li>
        <router-link
          to="/home"
          :class="$style.navItem">
          Main
        </router-link>
      </li>

      <li>
        <router-link
          v-show="isAuthenticated"
          to="/films"
          :class="$style.navItem">
          Films
        </router-link>
      </li>

      <li>
        <a
          :class="$style.navItem"
          @click="toggleAdminStatus">
          Admin
        </a>
      </li>

      <li>
        <router-link
          v-show="!isAuthenticated"
          to="/login"
          :class="$style.navItem">
          Sign in
        </router-link>
      </li>

      <li>
        <span
          v-show="isAuthenticated"
          :class="$style.navItem"
          @click="logout">
          Sign out
        </span>
      </li>

      <li>
        <router-link
          v-show="!isAuthenticated"
          to="/register"
          :class="$style.navItem">
          Sign up
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navigation',

  computed: {
    ...mapGetters([
      'isAuthenticated',
    ]),
  },

  methods: {
    async logout() {
      await this.resetAuth();
      this.$router.replace('./home');
    },

    ...mapActions([
      'resetAuth',
      'toggleAdminStatus',
    ]),

  },
};
</script>

<style module>

.navList {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

.navItem {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
}

.navItem:hover {
  background-color: #111111;
}

/* .router-link-active {
  background-color: #fff59e !important;
} TODO: doesn`t work */

</style>
