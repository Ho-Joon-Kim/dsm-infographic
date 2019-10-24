<template>
  <!-- 인포그래픽 자세히 보기 -->
  <div class="infographic-detail" v-bind:class="{closeDetail : notClickCheck}">
    <div
      class="detail-background"
      v-on:click="clickDetailClose"
    ></div>
    <div class="detail-content">
      <button
        id="detailClose"
        class="closebtn"
        type="button"
        v-on:click="clickDetailClose"
      >&times;</button>
      <button
        id="detailPrev"
        class="prev-button"
      >&#10094;</button>
      <div class="detail-img">
        <img class="detail--img" :src="imgLink" :alt="title">
      </div>
      <div class="detail-info">
        <div class="detail-title">
          <h2>{{ title }}</h2>
        </div>
        <div class="detail-desc">
          <p class="infographic--desc">{{ desc }}</p>
        </div>
        <div class="detail-survey">
          <ul class="q1">
            <h2>과학적 사고력</h2>
            <li>-기후 변화에 대하여 충실하게 다루였는가?</li>
            <li>-과학적 근거를 토대로 작성하였는가?</li>
            <li>-과학적을 빠지거나 부족한 부분은 없는가?</li><br>
            <input
              type="radio"
              name="q1"
              value="3"
              id="q1-score1"
              v-model="q1"
            /><label for="q1-score1">과학활동에 대한 과학적 사고력이 우수함</label><br>
            <input
              type="radio"
              name="q1"
              value="2"
              id="q1-score2"
              v-model="q1"
            /><label for="q1-score2">과학활동에 대한 과학적 사고력이 보통임</label><br>
            <input
              type="radio"
              name="q1"
              value="1"
              id="q1-score1"
              v-model="q1"
            /><label for="q1-score1">과학활동에 대한 과학적 사고력이 미흡함</label><br>
          </ul>
          <ul class="q2">
            <h2>산출물 완성도</h2>
            <li>-설명자료가 이해하기 쉽게 잘 설명되어 있으며 집중할 수 있게 만들었는가?</li><br>
            <input
              type="radio"
              name="q2"
              value="3"
              id="q2-score3"
              v-model="q2"
            /><label for="q2-score3">과학활동 산출물이 우수함</label><br>
            <input
              type="radio"
              name="q2"
              value="2"
              id="q3-score2"
              v-model="q2"
            /><label for="q3-score2">과학활동 산출물이 보통임</label><br>
            <input
              type="radio"
              name="q2"
              value="1"
              id="q3-score1"
              v-model="q2"
            /><label for="q3-score1">과학활동 산출물이 미흡함</label>
          </ul>
          <button
            v-on:click="onSubmit"
            type="submit"
            id="surveySubmit"
            class="surveySubmit"
          >
          평가 제출</button>
        </div>
      </div>
      <button
        id="detailNext"
        class="next-button"
      >&#10095;</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'infographic-detail',
  props: {
    clickCheck: Boolean,
    contentId: String,
    title: String,
    desc: String,
    imgLink: String,
  },
  data() {
    return {
      q1: '',
      q2: '',
    };
  },
  computed: {
    ...mapGetters(['getUID']),
    ...mapGetters(['getSurveyIsOk']),
    notClickCheck() {
      return !this.clickCheck;
    },
  },
  methods: {
    ...mapActions(['survey']),
    async onSubmit() {
      await this.survey({
        q1: this.q1,
        q2: this.q2,
        contentId: this.contentId,
        uid: this.getUID,
      });
      // BackEnd단에서 Survey API 개발 후,
      // 정상 동작이 확인되면 아래의 테스트 코드를 지운다.
      if (this.getSurveyIsOk) {
        console.log('제출 성공');
      } else {
        console.log('제출 실패');
      }
      this.clickDetailClose();
    },
    clickDetailClose() {
      this.$emit('click-detail-close');
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-detail.scss";
</style>
