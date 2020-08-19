<template>
  <a :href="shareURL" target="_blank" rel="noopener noreferrer">Share</a>
</template>

<script>
  export default {
    props: {
      link: String,
    },
    computed: {
      shareURL() {
        return `https://www.facebook.com/sharer/sharer.php?u=${this.link ? this.link : 'https://trumpsupportersarent.com/'}`;
      }
    },
  }
</script>

<style scoped>
  a {
    float: right;
    clear: both;
    color: #fff;
    padding: 0.5rem;
    text-decoration: none;
  }
  a::before {
    content: url('~assets/icon-facebook-white.svg');
    display: inline-block;
    width: 1rem;
    margin-right: 6px;
    position: relative;
    top: 1px;
  }
</style>
