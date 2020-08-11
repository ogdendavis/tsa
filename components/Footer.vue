<template>
  <footer>
    <a href="https://www.aauw.org/resources/policy/get-involved-in-elections/" target="_blank" rel="noopener noreferrer"><span>Want Trump out?</span> <span>Do something.</span></a>
    <div>
      This page is not affiliated with any of the media outlets or organizations linked therein. If you have suggestions for articles, or are under the misconception that venting at someone whose political views are different from your own will help you feel better about supporting a lying, racist, misogynist, ableist, homophobic fascist, you can reach me at contact@trumpsupportersarent.com.
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style scoped>
  footer {
    text-align: center;
  }

  a {
    display: inline-block;
    padding: 1rem;
    background: #fff;
    color: var(--blue);
    text-decoration: none;
    font-weight: 700;
    border: 0.25rem solid var(--blue);
    transition: all 0.25s ease;
  }
  a:hover {
    color: var(--red);
    border: 0.25rem solid var(--red);
  }

  @media only screen and (max-width: 425px) {
    span {
      display: block;
      text-align: center;
    }
  }

  div {
    text-align: justify;
    width: 60vw;
    min-width: 340px;
    margin: 2rem auto 1rem;
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 820px) {
    div {
      margin-bottom: 5rem;
    }
  }
</style>
