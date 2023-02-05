<template>
  <main class="idiom">
    <article>
      <IdiomReady v-if="this.$store.state.idiomStage === 0" />
      <IdiomStart v-if="this.$store.state.idiomStage === 1" />
    </article>
  </main>
</template>

<script>
import IdiomReady from '@/components/Idiom/IdiomReady.vue'
import IdiomStart from '@/components/Idiom/IdiomStart.vue'

export default {
  name: 'IdiomView',
  components: {
    IdiomReady,
    IdiomStart
  },
  data () {
  }
}
</script>

<style lang="scss">

</style>
