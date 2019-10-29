<template>
  <div id="SurveyResult" class="survey-result">
    <div class="survey-info">
      <div class="info-id">{{computedInfoClass}}반 {{computedInfoGroup}}조</div>
      <div class="info-title">{{ getContentTitle }}</div>
    </div>
    <div class="survey--result">
      <div class="result-q1">{{ getQ1Score }}점</div>
      <div class="result-q2">{{ getQ2Score }}점</div>
      <div class="result-sq">{{ getSqScore }}점</div>
    </div>
    <div class="survey--result-total">
      <div class="result-total">{{ getTotalScore }}점</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'survey-result',
  props: {
    contentId: String,
  },
  data() {
    return {
      title: '',
      q1_score: '-1',
      q2_score: '-1',
      sq_score: '-1',
    };
  },
  computed: {
    getContentTitle() {
      this.contentTitle();
      return this.title;
    },
    getQ1Score() {
      this.q1Score();
      return this.q1_score;
    },
    getQ2Score() {
      this.q2Score();
      return this.q2_score;
    },
    getSqScore() {
      this.sqScore();
      return this.sq_score;
    },
    getTotalScore() {
      return String(Number(this.getQ1Score) + Number(this.getQ2Score) + Number(this.getSqScore));
    },
    computedInfoGroup() {
      let Group = Number(this.contentId) % 7;
      if (Group === 0) {
        Group = 7;
      }
      return String(Group);
    },
    computedInfoClass() {
      const Class = Number(this.contentId) / 7;
      return String(Math.ceil(Class));
    },
  },
  methods: {
    ...mapActions(['contentInfo']),
    ...mapActions(['surveyResult']),
    ...mapActions(['surveyRanking']),
    async contentTitle() {
      const res = await this.contentInfo({ contentId: this.contentId });
      this.title = res.data.title;
    },
    async q1Score() {
      const res = await this.surveyResult({ contentId: this.contentId });
      if (res !== false) {
        this.q1_score = res.data.q1_a;
      }
    },
    async q2Score() {
      const res = await this.surveyResult({ contentId: this.contentId });
      if (res !== false) {
        this.q2_score = res.data.q2_a;
      }
    },
    async sqScore() {
      const res = await this.surveyRanking({
        rank1: this.contentId,
        rank2: this.contentId,
        rank3: this.contentId,
      });
      if (res !== 'done') {
        this.sq_score = res;
      } else {
        this.sq_score = '-1';
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/admin/survey-result.scss";
</style>
