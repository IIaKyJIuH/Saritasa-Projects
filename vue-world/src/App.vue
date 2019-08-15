<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

html,
body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #aaaaaa;
}

#app {
  height: 100%;
  font-family: "Roboto", helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
}

form {
  margin-top: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

form input {
  margin: 10px 0;
  padding: 15px;

  font-size: 20px;
  border: 6px solid #585858;
  border-radius: 4px;
}

.router-link-active,
.router-link-exact-active {
  background-color: #beb137;
}

</style>
