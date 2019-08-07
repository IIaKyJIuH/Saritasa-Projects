<template>
  <ul>
    <li>
      <router-link to="/home">Main</router-link>
    </li>
    <li>
      <router-link
        to="/login"
        v-show="!this.$store.getters.isAuthenticated"
      >Sign in</router-link>
    </li>
    <li>
      <router-link
        to="/register"
        v-show="!this.$store.getters.isAuthenticated"
      >Sign up</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
