<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TheHome',
  data() {
    return {
      msg: 'Welcome to my first Vue.js app',
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
