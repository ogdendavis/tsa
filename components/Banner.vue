<template>
  <header>
    <h1><div>Trump</div> <div>supporters</div> <div>aren't</div> <span :class="init ? 'loaded' : ''">{{ arent }}{{ noun ? 's' : '' }}</span></h1>
  </header>
</template>

<script>
  export default {
    props: {
      arent: String,
      noun: Boolean,
      init: Boolean,
    },
  }
</script>

<style scoped>
  header {
    text-align: center;
    transition: opacity 10s ease;
  }

  div {
    display: inline;
  }
  @media only screen and (max-width: 650px) {
    div {
      display: block;
    }
  }

  h1, span {
    display: inline-block;
    position: relative;
    overflow: hidden;
  }
  span {
    max-width: 0;
    transition: all 2s ease;
    bottom: -1rem;
    padding-bottom: 0.5rem; /* to match h1 */
  }
  span.loaded {
    max-width: calc(100vw);
  }
  span::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5rem;
    background: var(--red);
  }
  @media only screen and (max-width: 650px) {
    span {
      bottom: 0;
    }
  }
</style>
