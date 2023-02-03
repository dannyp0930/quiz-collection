<template>
  <div class="home">
    <nav class="home-container">
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
.home-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  a {
    font-size: 2rem;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 1rem;
    height: 5rem;
    line-height: 5rem;
  }
}
</style>

<script>
export default {
  name: 'HomeView'
}
</script>
