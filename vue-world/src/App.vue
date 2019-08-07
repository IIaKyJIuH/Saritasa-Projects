<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import Navigation from './components/the-navigation';
import Footer from './components/the-footer';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
