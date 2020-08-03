<template>
  <div>
    <div>Trump supporters aren't {{ content['arent'] }}{{ content['noun'] ? 's' : '' }}</div>
    <button @click="handleClick">Aren't what?</button>
    <div v-if="content['arent']">... but they decided that being {{ content.noun ? 'a ' : ''}}{{ content['arent'] }} isn't a deal breaker.</div>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex';

  export default {
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

<style>

</style>
