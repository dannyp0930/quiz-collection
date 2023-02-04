<template>
  <main class="idiom">
    <article>
      <header>
        <h1>사자성어</h1>
        <p>뜻을 보고 올바른 사자성어를 맞추세요</p>
        <form v-on:submit="submitForm">
          <label for="idiom-cnt-select">개수</label>
          <select id="idiom-cnt-select" v-model="cntSelect">
            <option
              v-for="(cnt, index) in cntSelectList"
              :key="index"
              :value="cnt.value"
            >{{ cnt.name }}</option>
          </select>
          <label for="idiom-time-select">제한시간</label>
          <select id="idiom-time-select" v-model="timeSelect">
            <option
            v-for="(time, index) in timeSelectList"
            :key="index"
            :value="time.value"
            >{{ time.name }}</option>
          </select>
          <button type="submit">시작</button>
        </form>
      </header>
      <IdiomQuiz />
      <section>
        <form >
          <input type="text">
        </form>
        <p>정답 : </p>
      </section>
    </article>
  </main>
</template>

<script>
import IdiomQuiz from '@/components/Idiom/IdiomQuiz.vue'
import data from '@/assets/idioms.json'
import randomPickArr from '@/utils/randomPickArr'

export default {
  name: 'IdiomView',
  components: {
    IdiomQuiz
  },
  data () {
    return {
      cntSelect: 5,
      cntSelectList: [
        { name: '5개', value: 5 },
        { name: '10개', value: 10 },
        { name: '15개', value: 15 },
        { name: '20개', value: 20 }
      ],
      timeSelect: 5,
      timeSelectList: [
        { name: '5초', value: 5 },
        { name: '6초', value: 6 },
        { name: '7초', value: 7 },
        { name: '8초', value: 8 },
        { name: '9초', value: 9 },
        { name: '10초', value: 10 }
      ]
    }
  },
  methods: {
    submitForm (e) {
      e.preventDefault()
      const length = data.length
      const cnt = this.cntSelect
      const time = this.timeSelect
      const idxList = randomPickArr(length, cnt)
      const res = idxList.map((idx) => data.results[idx])
      this.$store.commit('setIdioms', res, time)
    }
  }
}
</script>

<style lang="scss">

</style>
