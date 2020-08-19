<template>
  <article>
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      <h3>{{ item.title }}</h3>
      <div>
        <img :src="item.image" />
      </div>
      <p>{{ item.blurb }}</p>
    </a>
    <ShareButton class="articleShare" :link="item.link" />
  </article>
</template>

<script>
  import ShareButton from '~/components/ShareButton.vue';

  export default {
    components: {
      ShareButton,
    },
    props: {
      item: Object,
    }
  }
</script>

<style scoped>
  article {
    max-width: 30%;
    min-width: 15rem;
    position: relative;
    box-shadow: 2px 3px 10px 5px #dcdcdc;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }
  @media only screen and (max-width: 900px) {
    article {
      max-width: 45%;
    }
  }
  @media only screen and (max-width: 630px) {
    article {
      max-width: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3, p {
    padding: 0 0.75rem;
  }

  div {
    height: 13rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  .articleShare {
    background: var(--blue);
    color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
