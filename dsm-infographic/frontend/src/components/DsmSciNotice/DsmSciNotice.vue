<template>
  <div id="dsmSciNotice" class="dsmsci-notice">
    <div
      id="noticeBackground"
      class="notice-background"
      v-bind:style="{ height: computedHeight }"
      v-on:click="clickNoticeClose"
    >
    </div>
    <div
      id="noticeContent"
      class="notice-content"
      v-bind:style="{ display: computedDisplay }"
    >
      <button
        id="noticeClose"
        class="closebtn"
        type="button"
        v-on:click="clickNoticeClose"
      >&times;</button>

      <div class="notice-wrap">
        <div class="notice-title">
          <h1>{{ noticeTitle }}</h1>
        </div>
        <div class="notice-body">
          <p>{{ noticeBody }}</p>
        </div>
        <div class="notice-check">
          <button
            class="check-button"
            v-on:click="noticeCheck"
          >
            {{ noticeButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'dsmsci-notice',
  data() {
    return {
    };
  },
  computed: {
    computedHeight() {
      return this.height;
    },
    computedDisplay() {
      return this.display;
    },
    ...mapGetters({
      noticeTitle: 'getNoticeTitle',
    }),
    ...mapGetters({
      noticeBody: 'getNoticeBody',
    }),
    ...mapGetters({
      noticeButton: 'getNoticeButton',
    }),
    ...mapGetters({
      height: 'getNoticeHeight',
    }),
    ...mapGetters({
      display: 'getNoticeDisplay',
    }),
    ...mapGetters({
      adminPageCheck: 'getAdminPageCheck',
    }),
    ...mapGetters({
      surveyQ1: 'getSurveyPostQ1',
    }),
    ...mapGetters({
      surveyQ2: 'getSurveyPostQ2',
    }),
    ...mapGetters({
      surveyContentId: 'getSurveyPostContentId',
    }),
    ...mapGetters(['getUID']),
  },
  methods: {
    ...mapActions(['onClickModal']),
    ...mapActions(['setNotice']),
    ...mapActions(['logout']),
    ...mapActions(['survey']),
    ...mapActions(['setAdminPageCheck']),
    ...mapActions(['surveySubmitOverlapCheck']),
    ...mapActions(['setSurveyOverlapCheckCheck']),
    noticeCheck() {
      if (this.noticeTitle === '로그아웃') {
        this.logout();
        if (this.adminPageCheck === true) {
          this.setAdminPageCheck({ adminPageCheck: false });
          this.$router.push({
            name: 'home',
          });
        }
      } else if (this.noticeTitle === '평가 제출') {
        this.surveySubmit();
        this.surveySubmitOverlapCheck({ contentId: this.contentId });
      }
      this.clickNoticeClose();
      this.onClickModal({ onModal: false });
    },
    async surveySubmit() {
      await this.survey({
        q1: this.surveyQ1,
        q2: this.surveyQ2,
        contentId: this.surveyContentId,
        uid: this.getUID,
      });
    },
    clickNoticeClose() {
      this.setNotice({
        noticeTitle: '',
        noticeBody: '',
        noticeButton: '',
        noticeHeight: '0%',
        noticeDisplay: 'none',
      });
      this.$emit('click-notice-close');
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/notice/notice.scss";
</style>
