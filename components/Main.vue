<template>
  <main :class="mainClass">
    <h2>But they decided that being {{ content.noun ? 'a ' : ''}}{{ content['arent'] }} isn't a deal breaker.</h2>
    <section>
      <Card v-for="card in content.cards" :key="card.link" :item="card" />
    </section>
  </main>
</template>

<script>
  import Card from '~/components/Card.vue';

  export default {
    props: {
      visible: Boolean,
      content: Object,
    },
    components: {
      Card,
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
        else if (newVisible === false && newVisible !== oldVisible) {
          this.mainClass === 'hidden';
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
    transition: all 1s ease;
    max-width: 80rem;
    margin: 2rem auto;
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
    text-align: center;
    color: var(--red);
    font-size: 4rem;
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 2rem;
    }
  }

  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
</style>
