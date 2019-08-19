<template>
  <nav>
    <ul :class="$style.navList">
      <router-link
        to="/home"
        tag="li"
        :class="$style.navItem">
        Main
      </router-link>

      <router-link
        v-show="isAuthenticated"
        tag="li"
        to="/films"
        :class="$style.navItem">
        Films
      </router-link>

      <li
        :class="$style.navItem"
        @click="getAdminFeatures">
        Admin
      </li>

      <router-link
        v-show="!isAuthenticated"
        tag="li"
        to="/login"
        :class="$style.navItem">
        Sign in
      </router-link>

      <li
        v-show="isAuthenticated"
        :class="$style.navItem"
        @click="logout">
        Sign out
      </li>

      <router-link
        v-show="!isAuthenticated"
        tag="li"
        to="/register"
        :class="$style.navItem">
        Sign up
      </router-link>
    </ul>
    <!-- make user email shown here--->
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navigation',

  computed: {
    ...mapGetters([
      'isAuthenticated',
      'isAdmin',
    ]),
***REMOVED***

  methods: {
    async logout() {
      await this.resetAuth();
      this.$router.push('/');
 ***REMOVED*****REMOVED***

    ...mapActions([
      'resetAuth',
      'toggleAdminStatus',
    ]),

    getAdminFeatures() {
      this.toggleAdminStatus();
 ***REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
</script>

<style module>

.navList {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #555555;
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
  opacity: .7;
}

.navItem:active {
  opacity: .2;
}

</style>
