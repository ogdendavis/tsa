<template>
  <div class="container">
    <Banner :class="bannerClass" :arent="content['arent']" :noun="content['noun']" :init="bannerInit"/>
    <a v-if="displayMain" class="shareButton" :href="shareURL" target="_blank" rel="noopener noreferrer">Share</a>
    <Main :visible="displayMain" :content="content" />
    <Footer v-if="displayMain" w="80rem" />
    <button class="button" v-if="displayMain" @click="handleClick">Do it again!</button>
    <div class="startListener" tabindex="0" @wheel.once="handleScroll" @keyup.once="handleKeyup" @touchmove.once="handleTouch" @click.once="handleInitialClick" v-focus />
  </div>
</template>

<script>
  import Banner from '~/components/Banner.vue';
  import Main from '~/components/Main.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Banner,
      Main,
      Footer,
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
    computed: {
      shareURL() {
        let base = 'https://www.facebook.com/sharer/sharer.php?u=https://trumpsupportersarent.com/'
        // If we're loaded, add stuff!
        if (this.content) {
          base += `${this.content.arent}${this.content.noun ? 's' : ''}`
        }
        return base;
      }
    },
    mounted() {
      // If coming from internal nav, immediately load content
      if (this.$route.query.i || this.$route.name !== 'index') {
        this.start();
      }
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
        const container = document.querySelector('.container');
        // Fade out current content
        container.style.transition = 'opacity .5s ease';
        container.style.opacity = 0;
        // If we're on a topic-specific route, redirect to the main route. If not, just do the normal thing!
        if (this.$route.name !== 'index') {
          setTimeout(() => {
            this.$router.push( {path:'/', query: {i: 1}} );
          }, 510);
        }
        else {
          // Get new content and move back to top while faded out
          setTimeout(() => {
            this.getContent();
            window.scrollTo(0,0);
          }, 510);
          // Fade back in!
          setTimeout(() => {
            document.querySelector('.container').style.opacity = 1;
          }, 750);
          setTimeout(() => {
            document.querySelector('.container').style.transition = '';
          }, 1250);
        }
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
        // Default behavior - get a random thing!
        if (this.$route.name === 'index') {
          this.$store.dispatch('getNextTruth');
        }
        // If URL indicates that a specific item should be displayed
        else {
          this.$store.dispatch('getSpecificTruth', this.$route.name);
        }
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
    },
    head() {
      // Check once if we're at / or a topic-specific URL
      const indexRoute = this.$route.name === 'index';
      const title = 'Trump supporters aren\'t' + (indexRoute ? '...' : ` ${this.$route.name}`);
      const ogURL = 'https://trumpsupportersarent.com/' + (indexRoute ? '' : this.$route.name);
      return {
        title,
        meta: [
          {
            hid: 'og:url',
            property: 'og:url',
            content: ogURL
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: title,
          },
          {
            hid: 'og:desciption',
            property: 'og:description',
            content: `${title}, but they decided it isn't a deal breaker that Donald Trump is.`,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://trumpsupportersarent.com/trump.jpg',
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'website',
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: '362139678522240',
          },
        ]
      }
    },
  }
</script>

<style scoped>
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

  .shareButton {
    float: right;
    clear: both;
    color: #fff;
    padding: 0.5rem;
    text-decoration: none;
    font-size: 1.1rem;
  }
  .shareButton::before {
    content: url('~assets/icon-facebook-white.svg');
    display: inline-block;
    width: 1.5rem;
    margin-right: 6px;
    position: relative;
    top: 1px;
  }

  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  .startListener {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
