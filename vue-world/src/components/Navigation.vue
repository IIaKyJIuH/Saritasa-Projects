<template>
    <div>
      <h1> Navigation page </h1>
      <p>
        <router-link to="/login">Login</router-link>
        <router-link to="/home">Main</router-link>
      </p>
    </div>
</template>

<script>
    export default {
      name: 'Navigation'
    }
</script>
