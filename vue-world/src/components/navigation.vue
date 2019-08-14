<template>
  <nav>
    <ul :class="$style.navList">
      <li :class="$style.navItem">
        <router-link
          to="/home"
          :class="$style.routerLink"
        >
          Main
        </router-link>
      </li>

      <li :class="$style.navItem">
        <router-link
          v-show="isAuthenticated"
          to="/films"
          :class="$style.routerLink"
        >
          Films
        </router-link>
      </li>

      <li :class="$style.navItem">
        <router-link
          to="/admin"
          :class="$style.routerLink"
        >
          Admin
        </router-link>
      </li>

      <li :class="$style.navItem">
        <router-link
          v-show="!isAuthenticated"
          to="/login"
          :class="$style.routerLink"
        >
          Sign in
        </router-link>
      </li>

      <li :class="$style.navItem">
        <span
          v-show="isAuthenticated"
          :class="$style.routerLink"
          @click="logout"
        >
          Sign out
        </span>
      </li>

      <li :class="$style.navItem">
        <router-link
          v-show="!isAuthenticated"
          to="/register"
          :class="$style.routerLink"
        >
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
} TODO: doesn`t work */

</style>
