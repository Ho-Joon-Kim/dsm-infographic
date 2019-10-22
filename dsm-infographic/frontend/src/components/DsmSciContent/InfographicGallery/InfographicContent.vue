<template>
  <div>
    <div class="infographic-content"
      v-bind:class="{contentId, click: isClick}"
      v-on:click="clickInfo"
    >
      <div class="infographic-info">
        <div class="infographic-desc">
          <p class="infographic--desc">{{ desc }}</p>
        </div>
        <div class="infographic-img">
          <img class="infographic--img" :src="imgLink" :alt="title">
        </div>
      </div>
      <div class="infographic-title">
        <h2>{{ title }}</h2>
      </div>
    </div>
    <infographic-detail
      v-if="clickCheck"
      v-bind:clickCheck="clickCheck"
      v-bind:contentId="contentId"
      v-bind:title="title"
      v-bind:desc="desc"
      v-bind:imgLink="imgLink"
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
    };
  },
  props: {
    contentId: String,
    title: String,
    desc: String,
    imgLink: String,
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
  },
  methods: {
    ...mapActions(['clickContent']),
    clickInfo() {
      this.isClick = true;
      this.clickContent({ contentId: this.contentId });
    },
    clickDetailClose() {
      this.isClick = false;
      this.clickContent({ contentId: '' });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-content.scss";
</style>
