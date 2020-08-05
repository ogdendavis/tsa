<template>
  <div class="container" v-on:wheel.once="handleScroll">
    <Banner :class="bannerClass" :arent="forBanner['arent']" :noun="forBanner['noun']" />
    <div v-if="content['arent']">
      <button @click="handleClick">Aren't what?</button>
      <p>
        ... but they decided that being {{ content.noun ? 'a ' : ''}}{{ content['arent'] }} isn't a deal breaker.
      </p>
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
        bannerClass: 'banner banner--init',
        content: {
          arent: '',
          noun: false,
        },
        forBanner: {
          arent: '',
          noun: false,
        }
      };
    },
    methods: {
      handleClick(e) {
        this.getContent();
      },
      handleScroll(e) {
        this.startAnimation();
        this.getContent();
      },
      getContent() {
        this.$store.dispatch('getNextTruth');
        this.content = this.$store.state.displayContent;
      },
      startAnimation() {
        console.log('pretty!');
        this.bannerClass = 'banner';
        setTimeout(() => {
          this.forBanner = {
            arent: this.content.arent,
            noun: this.content.noun,
          }
        }, 500);
      },
    },
  }
</script>

<style scoped>
  .container {
    box-sizing: border-box;
    padding: 1rem;
    width: 100vw;
    height: 100vh;
  }

  .banner {
    transition: all .5s ease;
    transform: translateY(0);
  }
  .banner--init {
    transform: translateY(calc(50vh - 3rem));
  }
</style>
