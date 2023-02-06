<template>
  <section>
    <div v-if="idx < cnt">
      <h2>{{ this.time }}</h2>
      <h1>{{ this.idioms[idx].meaning }}</h1>
      <form v-on:submit="submitAnswer">
        <input type="text" ref="answer" v-model="answer" autofocus>
        <button type="submit">제출</button>
      </form>
      <p>정답 : {{ this.correctCnt }} / {{ this.cnt }}</p>
    </div>
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
      answer: '',
      correctCnt: this.$store.state.idiomCorrectCnt
    }
  },
  methods: {
    submitAnswer (e) {
      e.preventDefault()
      const answer = this.answer
      const correct = this.idioms[this.idx].korean
      if (answer === correct) {
        console.log('정답')
        this.idx++
        this.answer = ''
        this.$store.commit('setIdiomCorrectCnt', this.correctCnt + 1)
      } else {
        console.log(correct)
        this.answer = ''
      }
    }
  },
  mounted () {
    for (let i = 1; i < this.$store.state.idiomTime; i++) {
      setTimeout(() => {
        this.time -= 1
      }, 1000 * i)
    }
    setTimeout(() => {
      this.time -= 1
    }, 1000 * this.$store.state.idiomTime)
  },
  watch: {
    idx: function (newValue) {
      if (newValue === this.cnt) {
        this.$store.commit('setIdiomStage', 2)
      } else {
        this.time = this.$store.state.idiomTime
        for (let i = 1; i < this.$store.state.idiomTime; i++) {
          setTimeout(() => {
            this.time -= 1
          }, 1000 * i)
        }
        setTimeout(() => {
          this.time -= 1
        }, 1000 * this.$store.state.idiomTime)
      }
    },
    time (newValue) {
      if (newValue === 0) {
        console.log('게임 오버')
        this.$store.commit('setIdiomStage', 2)
      }
    }
  }

}
</script>
