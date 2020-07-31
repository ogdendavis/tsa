<template>
  <div>
    <div>I am a webpage.</div>
    <button @click="addOne">Increment</button>
    <button @click="lameo">Become lame</button>
    <div>{{ message }}</div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    data() {
        return {
        message: 'nope',
      };
    },
    methods: {
      addOne() {
        this.message = 'mathing!';
        console.log('adding!');
      },
      lameo() {
        this.message = 'laaaame';
        console.log('super lame');
      },
    }
  }
</script>

<style>

</style>
