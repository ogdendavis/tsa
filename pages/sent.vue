<template>
  <div class="container">
    <h1>Trump supporters arent...</h1>
    <div class="inner">
      <p class="emphasis">Thanks for your message!</p>
      <p>You'll be redirected back to trumpsupportersarent.com in a few seconds. If you're the impatient type...</p>
      <nuxt-link to="/" class="button go-home">Go there now!</nuxt-link>
    </div>
    <Footer w="60rem"/>
  </div>
</template>

<script>
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Footer,
    },
    mounted() {
      setTimeout(() => {
        this.$router.push( {path:'/'} );
      }, 10000);
    }
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }

  .inner {
    background: #fff;
    color: var(--blue);
    box-sizing: border-box;
    padding: 2rem;
    margin: 2rem auto 5rem;
    max-width: 60rem;
  }

  .emphasis {
    margin-top: 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>
