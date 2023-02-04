<template>
  <nav v-if="this.$store.state.isHome === false">
    <router-link class="home-link" to="/">퀴즈 모음집</router-link>
    <router-link to="/idiom">사자성어</router-link>
    <router-link to="/music">음악퀴즈</router-link>
    <router-link to="/character">인물퀴즈</router-link>
    <router-link to="/capital">수도퀴즈</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  padding: 1rem;
  display: flex;
  column-gap: 1rem;
  align-items: flex-end;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}

.home-link {
  font-size: 1.5rem;

  &:hover {
    transform: none;
  }
}

article {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

header {
  border: 2px solid black;
  border-radius: 1rem;
}

section {
  border: 2px solid black;
  border-radius: 1rem;
}
</style>

<script>
export default {
  name: 'App',
  watch: {
    $route (to, _from) {
      if (to.path === '/') {
        this.$store.commit('changeIsHome', true)
      } else {
        this.$store.commit('changeIsHome', false)
      }
    }
  }
}
</script>
>
