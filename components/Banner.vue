<template>
  <div>
    <h1>Trump supporters aren't&nbsp;<span :class="init ? 'loaded' : ''">{{ arent }}{{ noun ? 's' : '' }}</span></h1>

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
    font-weight: 700;
    font-size: 3rem;
    margin: 0;
  }
  span {
    display: inline-block;
    position: relative;
    max-width: 0;
    transition: all 2s ease;
    overflow: clip;
    text-overflow: clip;
    white-space: nowrap;
  }
  span.loaded {
    max-width: calc(100vw);
  }
  span::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background: var(--red);
  }
</style>
