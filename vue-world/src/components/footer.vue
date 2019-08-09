<template>
  <footer :class="$style.app_footer">
    <h1> Welcome to footer </h1>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style module>
.app_footer {
  margin-top: auto;
  background-color: rgb(116, 60, 60);
  color: white;
  text-align: center;
}
</style>
