<template>
  <section>
    <h1>
      GAMEOVER
    </h1>
    <h1>
      {{ this.correctCnt }} / {{ this.cnt }}
    </h1>
  </section>
</template>

<script>
export default {
  name: 'IdiomOver',
  data () {
    return {
      cnt: this.$store.state.idiomCnt,
      correctCnt: this.$store.state.idiomCorrectCnt
    }
  }
}
</script>
