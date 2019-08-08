<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/navigation.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
***REMOVED***
***REMOVED***
</script>

<style>

html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

</style>
