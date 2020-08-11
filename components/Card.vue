<template>
  <article>
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      <h3>{{ item.title }}</h3>
      <div>
        <img :src="item.image" />
      </div>
      <p>{{ item.blurb }}</p>
    </a>
  </article>
</template>

<script>
  export default {
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
  }
  article::after {
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--red);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  div {
    height: 13rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
