<template>
  <div class="container">
    <h1>Trump supporters aren't...</h1>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/sent"
    >
      <p>Please fill out this form to submit a resource for inclusion on trumpsupportersarent.com, or just to get in touch.</p>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email"/>
      <input type="url" name="link" placeholder="URL" />
      <span>Suggesting an article or resource? Put the link above</span>
      <textarea name="message" placeholder="Message"/>
      <button class="button" type="submit">Send</button>
    </form>
    <nuxt-link to="/?i=1" class="button">&lt; Back</nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  form {
    width: 30rem;
    max-width: 100%;
    box-sizing: border-box;
    margin: 1rem auto;
    background: #fff;
    color: var(--blue);
    padding: 2rem 3rem 6rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 420px) {
    p {
      font-size: 0.75rem;
    }
  }

  input, textarea {
    display: block;
    width: 100%;
    margin-top: 1rem;
  }
  textarea {
    height: 10rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
  }
  @media only screen and (max-width: 460px) {
    span {
      font-size: 0.6rem;
    }
  }

  button.button {
    float: right;
    position: relative;
    right: -0.5rem; /* compensate for border */
  }

  a.button {
    position: relative;
    left: -0.25rem;
    margin: 1rem 0;
  }
</style>
