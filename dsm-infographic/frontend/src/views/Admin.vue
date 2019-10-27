<template>
  <div class="admin">
    <div class="admin-info">
      <div class="admin-title">
        <h1>&lt; 평가 결과 &gt;</h1>
      </div>
      <div class="admin-desc">
        <p>각 작품에 대한 점수들을 볼 수 있습니다</p>
      </div>
    </div>
    <div class="survey-result-wrap">
      <ul class="survey-result-list">
        <li class="result-item">
          <div class="list-title">
            <div class="survey-info">
              <div class="info-id">작품 번호</div>
              <div class="info-title">작품 제목</div>
            </div>
            <div class="survey--result">
              <div class="result-q1">과학적 사고력</div>
              <div class="result-q2">산출물 완성도</div>
            </div>
            <div class="survey--result-total">
              <div class="result-total">총점</div>
            </div>
          </div>
        </li>
        <li class="result-item">
          <survey-result
            v-for="info in this.infoContents"
            :key="info.contentId"
            v-bind:contentId="info.contentId"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SurveyResult from '@/components/DsmSciAdmin/SurveyResult.vue';

export default {
  name: 'admin',
  components: {
    'survey-result': SurveyResult,
  },
  data() {
    return {
      contentIds: [],
      contentCnt: 27,
      currentContentId: 0,
    };
  },
  computed: {
    infoContents() {
      this.initContents();
      return this.contentIds;
    },
  },
  methods: {
    initContents() {
      for (let i = 0; i < this.contentCnt; i += 1) {
        this.nextContentId();
        this.contentIds[i] = { contentId: String(this.currentContentId) };
      }
    },
    nextContentId() {
      if (this.currentContentId < this.contentCnt) {
        this.currentContentId += 1;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/admin/admin.scss";
</style>
