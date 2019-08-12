<template>
  <nav>
    <ul :class="$style.navList">

      <li :class="$style.navItem">
        <router-link
          to="/home"
          :class="$style.routerLink">
          Main
        </router-link>
      </li>

      <li :class="$style.navItem">
        <router-link
          to="/films"
          v-show="isAuthenticated"
          :class="$style.routerLink">
          Films
        </router-link>
      </li>

      <li :class="$style.navItem">
        <router-link
          to="/login"
          v-show="!isAuthenticated"
          :class="$style.routerLink">
          Sign in
        </router-link>
      </li>

      <li :class="$style.navItem">
        <span
          v-show="isAuthenticated"
          @click="logout"
          :class="$style.routerLink">
          Sign out
        </span>
      </li>

      <li :class="$style.navItem">
        <router-link
          to="/register"
          v-show="!isAuthenticated"
          :class="$style.routerLink">
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
    ]),
  },
};
</script>

<style module>

.navList {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

.navItem {
  float: left;
}

.routerLink {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
}

.routerLink:hover {
  background-color: #111111;
}

/* .router-link-active {
  background-color: #fff59e !important;
} TODO: не работает */

</style>
