<template>
  <div id="infographicGallery" class="infographic-gallery">
    <div id="infographicWrap" class="infographic-wrap">
      <infographic-content
        v-for="info in this.infoContents"
        :key="info.contentId"
        v-bind:contentId="info.contentId"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InfographicContent from '@/components/DsmSciContent/InfographicGallery/InfographicContent.vue';

export default {
  name: 'infographic-gallery',
  data() {
    return {
      contentIds: [],
      contentCnt: 27,
      currentContentId: 0,
      clickInfo: {
        clickCheck: false,
        contentId: '',
        title: '',
        desc: '',
        img: '',
      },
    };
  },
  components: {
    'infographic-content': InfographicContent,
  },
  computed: {
    ...mapGetters({
      onModal: 'getOnModal',
    }),
    infoContents() {
      this.initContents();
      return this.contentIds;
    },
  },
  methods: {
    ...mapActions(['surveySubmitOverlapCheck']),
    initContents() {
      for (let i = 0; i < this.contentCnt; i += 1) {
        this.nextContentId();
        this.contentIds[i] = {
          contentId: String(this.currentContentId),
        };
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
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-gallery.scss";
</style>
