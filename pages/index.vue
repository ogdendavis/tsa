<template>
  <div class="container">
    <Banner :class="bannerClass" :arent="content['arent']" :noun="content['noun']" :init="bannerInit"/>
    <Main :visible="displayMain" :content="content" />
    <button v-if="displayMain" @click="handleClick">Do it again!</button>
    <div class="startListener" tabindex="0" @wheel.once="handleScroll" @keyup.once="handleKeyup" @touchmove.once="handleTouch" @click.once="handleInitialClick" v-focus />
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
    directives: {
      focus: {
        inserted: function(el) {
          el.focus();
        },
      },
    },
    methods: {
      handleClick(e) {
        this.getContent();
      },
      handleScroll() {
        // This and following "handle" functions exist because Vue doesn't want you to attach multiple listeners to an element with the same callback.
        this.start();
      },
      handleInitialClick() {
        this.start();
      },
      handleKeyup() {
        this.start();
      },
      handleTouch() {
        this.start();
      },
      start() {
        // called by all listeners on startListener
        this.startAnimation();
        this.getContent();
        // remove startListener -- thereby also removing its listeners
        document.querySelector('.startListener').remove();
      },
      getContent() {
        this.$store.dispatch('getNextTruth');
        this.content = this.$store.state.displayContent;
      },
      startAnimation() {
        // Arrow immediately fades out, and we initialize the banner
        this.bannerClass = 'banner banner--init';
        this.bannerInit = true;
        // Let the page container go back to auto sizing
        this.containerClass = 'container';
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

  .startListener {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
