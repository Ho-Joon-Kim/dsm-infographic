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
      <div
        v-if="getUID"
        class="detail-info"
      >
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
              <li>-&nbsp;주제를 충실하게 다루었는가?</li>
              <li>-&nbsp;인포그래픽에 표현된 내용이 정확하고 의미 있는가?</li>
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
              <li>-&nbsp;핵심 포인트와 내용의 흐름을 효과적으로 구성하였는가?</li>
              <li>-&nbsp;전달하고자 하는 지식과 정보의 특성에 맞는 시각적 표현을 했는가?</li>
              <li>-&nbsp;인포그래픽의 색상 및 디자인 등이 우수한가?</li>
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
      <div v-else>
        <div class="detail-info">
          <div class="not-login">
            <p>
              <button
                v-on:click="clickLoginOpen"
              >{{ computedNotLogin }}</button>
            </p>
          </div>
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
  watch: {
    getSurveySubmitCount() {
      if (this.getSurveySubmitCount === 27) {
        this.setNotice({
          noticeTitle: '평가 완료',
          noticeBody: '27개의 평가가 완료되었습니다.<br>마지막으로 가장 잘한 1위,2위,3위를 선정해주세요',
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
      }
    },
    getSurveyOverlapCheck() {
      if (this.getSurveyOverlapCheck === true) {
        this.setNotice({
          noticeTitle: '제출 실패',
          noticeBody: '이미 평가한 작품입니다',
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
        this.setSurveyOverlapCheckCheck({ surveyOverlapCheckCheckCheck: false });
      }
    },
    getSurveyIsOk() {
      if (this.getSurveyIsOk === true) {
        this.clickDetailClose();
      }
    },
    getSurveyErrorState() {
      if (this.getSurveyErrorState === '자신의 작품은 평가할 수 없습니다') {
        this.setNotice({
          noticeTitle: '제출 실패',
          noticeBody: this.getSurveyErrorState,
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
      }
    },
  },
  computed: {
    ...mapGetters(['getUID']),
    ...mapGetters(['getSurveyIsOk']),
    ...mapGetters(['getSurveyErrorState']),
    ...mapGetters(['getSurveySubmitCount']),
    ...mapGetters(['getSurveyOverlapCheck']),
    ...mapGetters({
      detailImage: 'getDetailImage',
    }),
    computedNotLogin() {
      if (this.detailImage) {
        this.onClickModal({ onModal: false });
      } else {
        this.onClickModal({ onModal: true });
      }
      return '로그인이 필요합니다!';
    },
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
    ...mapActions(['clickLogin']),
    ...mapActions(['surveySubmitOverlapCheck']),
    ...mapActions(['setNotice']),
    ...mapActions(['surveyPostData']),
    ...mapActions(['initSurvey']),
    ...mapActions(['setSurveyOverlapCheckCheck']),
    clickLoginOpen() {
      this.clickLogin({
        height: '100%',
        display: 'inline-block',
      });
      this.onClickModal({ onModal: true });
    },
    clickOverlapOpen() {
      this.setNotice({
        noticeTitle: '제출 실패',
        noticeBody: '이미 평가한 작품입니다',
        noticeButton: '확인',
        noticeHeight: '100%',
        noticeDisplay: 'inline-block',
      });
    },
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
      if (this.getUID === 'admin' || this.getUID === 'dev') {
        this.setNotice({
          noticeTitle: '제출 실패',
          noticeBody: 'admin 또는 dev계정은 평가에 참여할 수 없습니다',
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
        return;
      }
      if (this.surveySubmitOverlapCheck({ contentId: this.contentId }) === true) {
        this.setNotice({
          noticeTitle: '제출 실패',
          noticeBody: '이미 평가한 작품입니다',
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
        return;
      }
      if (this.qError(1) || this.qError(2)) {
        this.submitError = '아직 평가하지 않은 항목이 있습니다.';
        return;
      }
      this.surveyPostData({ q1: this.q1, q2: this.q2, contentId: this.contentId });
      this.setNotice({
        noticeTitle: '평가 제출',
        noticeBody: `과학적 사고력 : ${this.q1}점\n산출물 완성도 : ${this.q2}점\n평가 제출 하시겠습니까?`,
        noticeButton: '확인',
        noticeHeight: '100%',
        noticeDisplay: 'inline-block',
      });
      if (this.getSurveyIsOk === true) {
        this.clickDetailClose();
      } else if (this.getSurveyIsOk === false && this.getSurveyErrorState !== '') {
        this.setNotice({
          noticeTitle: '제출 실패',
          noticeBody: this.getSurveyErrorState,
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
      }
    },
    clickDetailClose() {
      this.initSurvey();
      this.$emit('click-detail-close');
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-detail.scss";
</style>
