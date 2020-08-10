<template>
  <main :class="mainClass">
    <h2>But they decided that being {{ content.noun ? 'a ' : ''}}{{ content['arent'] }} isn't a deal breaker.</h2>
    <section>
      Here is some dummy content!
    </section>
  </main>
</template>

<script>
  export default {
    props: {
      visible: Boolean,
      content: Object,
    },
    data() {
      return {
        mainClass: 'hidden',
      }
    },
    watch: {
      visible: function(newVisible, oldVisible) {
        if (newVisible === true && newVisible !== oldVisible) {
          // Toggle visibility & display before fading in
          this.mainClass = 'visible';
          setTimeout(() => {
            this.mainClass = 'visible fadeIn';
          }, 10);
        }
      }
    }
  }
</script>

<style scoped>
  main {
    background: #fff;
    color: var(--blue);
    padding: 2rem;
    box-sizing: border-box;
    min-height: 33vh;
    transition: all 1s ease;
  }
  main.hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  main.visible {
    display: block;
    visibility: visible;
    opacity: 0;
  }
  main.fadeIn {
    opacity: 1;
  }

  h2 {
    margin-top: 0;
  }
</style>
