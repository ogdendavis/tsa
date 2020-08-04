<template>
  <div>
    <div>
      <h1>Trump supporters aren't</h1>
      <span class="arent">
        {{ content['arent'] }}{{ content['noun'] ? 's' : '' }}
      </span>
    </div>
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

<style scoped>
  h1, .arent {
    display: inline-block;
    font-weight: 700;
    font-size: 3rem;
    margin: 0;
  }
  h1 {
    margin-right: 0.67rem;
  }
  .arent {
    color: var(--red);
  }
</style>
