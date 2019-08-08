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
          v-show="this.isAuthenticated"
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
          v-show="!this.isAuthenticated"
          :class="$style.router_link"
        >
          Sign in
        </router-link>
      </li>

      <li
        :class="$style.nav_item"
      >
        <router-link
          to="/register"
          v-show="!this.isAuthenticated"
          :class="$style.router_link"
        >
          Sign up
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters([
      'isAuthenticated',
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
}

.router_link:hover {
  background-color: #111111;
}

</style>
