<template>
  <div>
    <h1>Trump supporters aren't <span :class="init ? 'loaded' : ''">{{ arent }}{{ noun ? 's' : '' }}</span></h1>

  </div>
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
  div {
    text-align: center;
  }
  h1, span {
    display: inline-block;
    position: relative;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    margin: 0;
    padding-bottom: 0.5rem;
    overflow: hidden;
  }
  span {
    max-width: 0;
    transition: all 2s ease;
    bottom: -1rem;
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
</style>
