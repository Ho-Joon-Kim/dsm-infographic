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
      <div
        class="detail-img"
        v-on:click="clickDetailImageOpen"
        title="이미지를 크게 보려면 클릭하세요"
      ><img class="detail--img" :src="imgLink" :alt="title">
      </div>
      <div class="detail-info">
        <div class="detail--info">
          <div class="detail-title">
            <h2>{{ title }}</h2>
          </div>
          <div class="detail-desc">
            <p class="infographic--desc">{{ desc }}</p>
          </div>
        </div>
        <div class="detail--info">
          <p class="nota-bene">
            본 평가는 대덕SW마이스터고등학교 1학년 학생들을
            대상으로 실시된 과학 기후 인포그래픽에 대한
            평가입니다.
          </p>
          <br/>
          <p class="nota-bene">
            각 항목별 점수는 3점으로 총 6점이 만점입니다.
          </p>
          <br>
          <p class="nota-bene">
            왼쪽의 이미지를 클릭하면 이미지를 크게 볼 수 있으니
            <br><span style="color:red;font-weight:bold">반드시</span> 확인 후 평가 바랍니다.
          </p>
          <br>
          <p class="nota-bene">
            평가 기준에 맞는 공정한 평가 바랍니다.
          </p>
        </div>
        <div class="detail-survey">
          <div id="surveyQ1" class="survey-q">
            <h2 class="q-title">1. 과학적 사고력</h2>
            <ul class="q-valuationBasis">
              <li>-&nbsp;기후 변화에 대하여 충실하게 다루였는가?</li>
              <li>-&nbsp;과학적 근거를 토대로 작성하였는가?</li>
              <li>-&nbsp;과학적을 빠지거나 부족한 부분은 없는가?</li><br>
            </ul>
            <div class="q-score">
              <ul class="score-radio-list">
                <li class="score-radio-item">
                  <input
                    class="scoreRadio"
                    type="radio"
                    name="q1"
                    value="3"
                    id="q1-score3"
                    v-model="q1"
                  /><label for="q1-score3">과학활동에 대한 과학적 사고력이 우수함</label>
                  <div class="check"></div>
                </li>
                <li class="score-radio-item">
                  <input
                    class="scoreRadio"
                    type="radio"
                    name="q1"
                    value="2"
                    id="q1-score2"
                    v-model="q1"
                  /><label for="q1-score2">과학활동에 대한 과학적 사고력이 보통임</label>
                  <div class="check"></div>
                </li>
                <li class="score-radio-item">
                  <input
                    class="scoreRadio"
                    type="radio"
                    name="q1"
                    value="1"
                    id="q1-score1"
                    v-model="q1"
                  /><label for="q1-score1">과학활동에 대한 과학적 사고력이 미흡함</label>
                  <div class="check"></div>
                </li>
              </ul>
            </div>
          </div>
          <div id="surveyQ2" class="survey-q">
            <h2 class="q-title">2. 산출물 완성도</h2>
            <ul class="q-valuationBasis">
              <li>-&nbsp;설명자료가 이해하기 쉽게 잘 설명되어 있으며 집중할 수 있게 만들었는가?</li>
            </ul>
            <div class="q-score">
              <ul class="score-radio-list">
                <li class="score-radio-item">
                  <input
                    class="scoreRadio"
                    type="radio"
                    name="q2"
                    value="3"
                    id="q2-score3"
                    v-model="q2"
                  /><label for="q2-score3">과학활동 산출물이 우수함</label>
                  <div class="check"></div>
                </li>
                <li class="score-radio-item">
                  <input
                    class="scoreRadio"
                    type="radio"
                    name="q2"
                    value="2"
                    id="q2-score2"
                    v-model="q2"
                  /><label for="q2-score2">과학활동 산출물이 보통임</label>
                  <div class="check"></div>
                </li>
                <li class="score-radio-item">
                  <input
                    class="scoreRadio"
                    type="radio"
                    name="q2"
                    value="1"
                    id="q2-score1"
                    v-model="q2"
                  /><label for="q2-score1">과학활동 산출물이 미흡함</label>
                  <div class="check"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="detail-survey-result">
          <div class="result-wrap">
            <div class="result-q1">
              <h3 v-if="!qErrorCheck(1)">과학적 사고력 : {{ getQ1Score }}</h3>
              <h3 v-else>{{ getQ1Score }}</h3>
            </div>
            <div class="result-q2">
              <h3 v-if="!qErrorCheck(2)">산출물 완성도 : {{ getQ2Score }}</h3>
              <h3 v-else>{{ getQ2Score }}</h3>
            </div>
          </div>
        </div>
        <div class="detail-survey-submit">
          <button
            v-on:click="onSubmit"
            type="submit"
            id="surveySubmit"
            class="survey-submit"
          >
          평가 제출</button>
        </div>
      </div>
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
      q1Error: '',
      q2Error: '',
      submitError: '',
    };
  },
  computed: {
    ...mapGetters(['getUID']),
    ...mapGetters(['getSurveyIsOk']),
    ...mapGetters({
      detailImage: 'getDetailImage',
    }),
    notClickCheck() {
      this.clickDetailImageOpen();
      return !this.clickCheck;
    },
    getQ1Score() {
      if (this.qError(1) !== true) {
        return `${this.q1}점`;
      }
      return this.q1Error;
    },
    getQ2Score() {
      if (this.qError(2) !== true) {
        return `${this.q2}점`;
      }
      return this.q2Error;
    },
  },
  methods: {
    ...mapActions(['onClickModal']),
    ...mapActions(['survey']),
    ...mapActions(['clickDetailImage']),
    clickDetailImageOpen() {
      this.clickDetailImage({
        detailImage: true,
        detailImgLink: this.imgLink,
        detailImgTitle: this.title,
      });
      this.onClickModal({ onModal: false });
    },
    qErrorCheck(qId) {
      if (this.q1Error !== '' && qId === 1) {
        return true;
      }
      if (this.q2Error !== '' && qId === 2) {
        return true;
      }
      return false;
    },
    qError(qId) {
      if (!this.detailImage) {
        this.onClickModal({ onModal: true });
      }
      if (this.q1 === '' && qId === 1) {
        this.q1Error = '과학적 사고력에 대한 평가가 완료되지 않았습니다.';
      } else if (qId === 1) {
        this.q1Error = '';
      }
      if (this.q2 === '' && qId === 2) {
        this.q2Error = '산출물 완성도에 대한 평가가 완료되지 않았습니다.';
      } else if (qId === 2) {
        this.q2Error = '';
      }
      return this.qErrorCheck(qId);
    },
    async onSubmit() {
      if (this.qError(1) || this.qError(2)) {
        this.submitError = '아직 평가하지 않은 항목이 있습니다.';
        return;
      }
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
