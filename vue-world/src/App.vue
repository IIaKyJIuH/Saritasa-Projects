<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Navigation,
      Footer
***REMOVED*****REMOVED*****REMOVED***
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
