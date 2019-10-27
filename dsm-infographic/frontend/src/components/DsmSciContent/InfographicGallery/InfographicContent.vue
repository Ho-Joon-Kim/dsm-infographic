<template>
  <div>
    <div class="infographic-content"
      v-bind:class="{contentId, click: isClick}"
      v-on:click="clickInfo"
    >
      <div class="infographic-info">
        <div class="infographic-desc">
          <p class="infographic--desc">{{ getContentDesc }}</p>
        </div>
        <div class="infographic-img">
          <img class="infographic--img" :src="getContentImgLink" :alt="getContentTitle">
        </div>
      </div>
      <div class="infographic-title">
        <h2>[{{ contentId }}] {{ getContentTitle }}</h2>
      </div>
    </div>
    <infographic-detail
      v-if="clickCheck"
      v-bind:clickCheck="clickCheck"
      v-bind:contentId="contentId"
      v-bind:title="getContentTitle"
      v-bind:desc="getContentDesc"
      v-bind:imgLink="getContentImgLink"
      v-on:click-detail-close="clickDetailClose"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import InfographicDetail from '@/components/DsmSciContent/InfographicGallery/InfographicDetail.vue';

export default {
  name: 'infographic-content',
  data() {
    return {
      isClick: false,
      imgLink: '/api/info/img?imgid=',
      title: '',
      desc: '',
    };
  },
  props: {
    contentId: String,
  },
  components: {
    'infographic-detail': InfographicDetail,
  },
  computed: {
    ...mapGetters({
      clickContentId: 'getClickContendId',
    }),
    clickCheck() {
      if (this.clickContentId !== this.contentId) {
        return false;
      }
      return true;
    },
    getContentImgLink() {
      return this.imgLink + this.contentId;
    },
    getContentTitle() {
      this.contentTitle();
      return this.title;
    },
    getContentDesc() {
      this.contentDesc();
      return this.desc;
    },
  },
  methods: {
    ...mapActions(['contentInfo']),
    ...mapActions(['clickContent']),
    ...mapActions(['onClickModal']),
    ...mapActions(['loginErrorClose']),
    clickInfo() {
      this.isClick = true;
      this.clickContent({ contentId: this.contentId });
      this.onClickModal({ onModal: true });
      this.loginErrorClose();
    },
    clickDetailClose() {
      this.isClick = false;
      this.clickContent({ contentId: '' });
      this.onClickModal({ onModal: false });
    },
    async contentTitle() {
      const res = await this.contentInfo({ contentId: this.contentId });
      this.title = res.data.title;
    },
    async contentDesc() {
      const res = await this.contentInfo({ contentId: this.contentId });
      this.desc = res.data.desc;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-content.scss";
</style>
