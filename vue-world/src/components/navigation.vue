<template>
  <nav>
    <ul
      :class="$style.nav_list"
    >

      <li
        :class="$style.nav_item"
      >
        <router-link
          to="/home"
          :class="$style.router_link"
        >
          Main
        </router-link>
      </li>

      <li
        :class="$style.nav_item"
      >
        <router-link
          to="/films"
          v-show="isAuthenticated"
          :class="$style.router_link"
        >
          Films
        </router-link>
      </li>

      <li
        :class="$style.nav_item"
      >
        <router-link
          to="/login"
          v-show="!isAuthenticated"
          :class="$style.router_link"
        >
          Sign in
        </router-link>
      </li>

      <li
        :class="$style.nav_item"
      >
        <span
          v-show="isAuthenticated"
          @click="logout"
          :class="$style.router_link"
        >
          Sign out
        </span>
      </li>

      <li
        :class="$style.nav_item"
      >
        <router-link
          to="/register"
          v-show="!isAuthenticated"
          :class="$style.router_link"
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
      await this.resetAuth;
      this.$router.replace('./home');
    },

    ...mapActions([
      'resetAuth',
    ]),
  },
};
</script>

<style module>

.nav_list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

.nav_item {
  float: left;
}

.router_link {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
}

.router_link:hover {
  background-color: #111111;
}

</style>
