<template>
  <div class="container">
    <Banner :arent="content['arent']" :noun="content['noun']" />
    <button @click="handleClick">Aren't what?</button>
    <div v-if="content['arent']">
      ... but they decided that being {{ content.noun ? 'a ' : ''}}{{ content['arent'] }} isn't a deal breaker.
    </div>
  </div>
</template>

<script>
  import Banner from '~/components/Banner.vue';

  export default {
    components: {
      Banner,
    },
    data() {
        return {
        content: {
          'arent': '',
          noun: false,
        },
        clicks: 0,
      };
    },
    methods: {
      getContent() {
        this.$store.dispatch('getNextTruth');
        this.content = this.$store.state.displayContent;
      },
      handleClick() {
        this.getContent();
        this.clicks++;
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 1rem;
  }
</style>
