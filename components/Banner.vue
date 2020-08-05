<template>
  <div>
    <h1>Trump supporters aren't</h1>
    <span>
      {{ arent }}{{ noun ? 's' : '' }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      arent: String,
      noun: Boolean,
    },
  }
</script>

<style scoped>
  div {

  }
  h1, span {
    display: inline-block;
    font-weight: 700;
    font-size: 3rem;
    margin: 0;
  }
  h1 {
    margin-right: 0.67rem;
  }
  span {
    color: var(--red);
    position: relative;
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
