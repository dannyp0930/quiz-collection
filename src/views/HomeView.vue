<template>
  <main class="home">
    <nav class="home-nav">
      <router-link to="/idiom">사자성어</router-link>
      <router-link to="/music">음악퀴즈</router-link>
      <router-link to="/character">인물퀴즈</router-link>
      <router-link to="/capital">수도퀴즈</router-link>
    </nav>
  </main>
</template>

<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-nav {
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;

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
