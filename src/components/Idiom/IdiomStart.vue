<template>
  <section>
    <h1>{{ this.idioms[idx].meaning }}</h1>
    {{ this }}
  </section>
  <section>
    <form v-on:submit="submitAnswer">
      <input type="text" ref="answer" v-model="answer" autofocus>
      <p>정답 : {{ this.correct }} / {{ this.cnt }}</p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'IdiomStart',
  data () {
    return {
      idioms: this.$store.state.idioms,
      cnt: this.$store.state.idiomCnt,
      time: this.$store.state.idiomTime,
      idx: 0,
      correct: 0
    }
  },
  mutations: {

  }
}
</script>
