<template>
  <div
    :class="$style.home">
    <h1 :class="$style.title">
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to my first Vue.js app',
    };
  },
};
</script>

<style module>

.home {
  margin: auto 0;
}

.title {
  font-weight: bold;
}

</style>
