<template>
  <div class="container">
    <h1>Trump supporters aren't...</h1>
    <p>...able to find this page. If you think there should be something here, <nuxt-link to="/contact">let us know.</nuxt-link></p>
    <nuxt-link to="/" class="button">Go to the main page</nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .container {
    text-align: center;
  }
  p, .button {
    margin-top: 2rem;
  }
  a:not(.button) {
    color: #fff;
    font-weight: 700;
  }
</style>
