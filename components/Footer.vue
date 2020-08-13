<template>
  <footer>
    <a class="button" href="https://www.aauw.org/resources/policy/get-involved-in-elections/" target="_blank" rel="noopener noreferrer"><span>Want Trump out?</span> <span>Do something.</span></a>
    <div :style="footStyle">
      <p>This page is not affiliated with any of the media outlets or organizations linked therein.</p>
      <p><nuxt-link class="internalNav" to="/contact">Contact</nuxt-link></p>
    </div>
  </footer>
</template>

<script>
  export default {
    props: {
      w: String,
    },
    computed: {
      footStyle() {
        return 'max-width:' + (this.w ? this.w : 'none') + ';';
      }
    }
  }
</script>

<style scoped>
  footer {
    text-align: center;
  }

  @media only screen and (max-width: 425px) {
    span {
      display: block;
      text-align: center;
    }
  }

  div {
    max-width: 60rem;
    margin: 2rem auto 1rem;
  }
  @media only screen and (max-width: 820px) {
    div {
      margin-bottom: 5rem;
    }
  }

  p {
    font-size: 0.75rem;
    text-align: left;
    margin: 0.25rem 0 1rem;
  }

  .internalNav {
    color: red;
    font-weight: 700;
  }
</style>
