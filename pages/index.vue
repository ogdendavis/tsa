<template>
  <div class="container" v-on:wheel.once="handleScroll">
    <Banner :class="bannerClass" :arent="content['arent']" :noun="content['noun']" :init="bannerInit"/>
    <Main :visible="displayMain" :content="content" />
    <button v-if="displayMain" @click="handleClick">Do it again!</button>
  </div>
</template>

<script>
  import Banner from '~/components/Banner.vue';
  import Main from '~/components/Main.vue';

  export default {
    components: {
      Banner,
      Main,
    },
    data() {
      return {
        bannerClass: 'banner banner--init banner--withArrow',
        content: {
          arent: '',
          noun: false,
          cards: [],
        },
        bannerInit: false,
        displayMain: false,
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
        }, 1000);
        // Once the banner has arrived at the top, display the rest of the content and remove the (now invisible) bouncy arrow
        setTimeout(() => {
          this.displayMain = true;
          this.bannerClass = 'banner banner--done';
        }, 1600);
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
    transform: translateY(calc(50vh - 4rem));
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

  button {
    background: #fff;
    color: var(--red);
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    border: none;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid var(--red);
  }
</style>
