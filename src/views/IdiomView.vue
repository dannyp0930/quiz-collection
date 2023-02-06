<template>
  <main class="idiom">
    <article>
      <IdiomReady v-if="this.$store.state.idiomStage === 0" />
      <IdiomStart v-if="this.$store.state.idiomStage === 1" />
      <IdiomOver v-if="this.$store.state.idiomStage === 2" />
    </article>
  </main>
</template>

<script>
import IdiomReady from '@/components/Idiom/IdiomReady.vue'
import IdiomStart from '@/components/Idiom/IdiomStart.vue'
import IdiomOver from '@/components/Idiom/IdiomOver.vue'

export default {
  name: 'IdiomView',
  components: {
    IdiomReady,
    IdiomStart,
    IdiomOver
  }
}
</script>

<style lang="scss">

</style>
