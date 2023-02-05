<template>
  <section>
    <h1>
      {{ this.time }}
    </h1>
  </section>
</template>

<script>
import beepSrc from '@/assets/beep.mp3'

export default {
  name: 'IdiomReady',
  data () {
    return {
      time: 5
    }
  },
  mounted () {
    const audio = new Audio(beepSrc)
    audio.volume = 1
    audio.play()
    for (let i = 1; i < 5; i++) {
      setTimeout(() => {
        audio.play()
        this.time -= 1
      }, 1000 * i)
    }
  }
}
</script>
