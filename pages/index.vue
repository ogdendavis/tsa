<template>
  <div class="container" v-on:wheel.once="handleScroll">
    <Banner :class="bannerClass" :arent="content['arent']" :noun="content['noun']" :init="bannerInit"/>
    <div v-if="displayFull">
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
        bannerClass: 'banner banner--init banner--withArrow',
        content: {
          arent: '',
          noun: false,
        },
        bannerInit: false,
        displayFull: false,
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
        // Arrow immediately fades out, and we initialize the banner
        this.bannerClass = 'banner banner--init';
        this.bannerInit = true;
        // Trigger animation by removing banner--init class
        setTimeout(() => {
          this.bannerClass = 'banner';
        }, 600);
        // Once the banner has arrived at the top, display the rest of the content
        setTimeout(() => {
          this.displayFull = true;
        }, 1200);
        // The downCaret is now bouncing invisibly. Remove it!
        setTimeout(() => {
          this.bannerClass = 'banner banner--done';
        }, 1200);
      },
    }
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
  .banner::after {
    content: url('~assets/downCaret.png');
    display: block;
    width: 2rem;
    margin: 2rem auto 0;
    animation: 1s bounce infinite both;
    transition: opacity .5s ease;
    opacity: 0;
  }
  .banner--init {
    transform: translateY(calc(50vh - 3rem));
  }
  .banner--withArrow::after {
    opacity: 1;
  }
  .banner--done::after {
    content: none;
    display: none;
    visibility: hidden;
  }


  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }
</style>
