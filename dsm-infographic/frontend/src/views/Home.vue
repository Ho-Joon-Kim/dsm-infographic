<template>
  <div id="dsmSciHome" class="dsmsci-home" :class="{ notScroll: onModal}">
    <dsmsci-content/>
    <detail-image
      v-if="detailImage"
      v-bind:title="title"
      v-bind:imgLink="imgLink"
      v-bind:height="computedHeight"
      v-bind:display="computedDisplay"
      v-bind:mode="computedMode"
      v-on:click-image-close="clickDetailImageClose"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DsmSciContent from '@/components/DsmSciContent/DsmSciContent.vue';
import DetailImage from '@/components/DsmSciContent/InfographicGallery/detailImage.vue';

export default {
  name: 'home',
  components: {
    'dsmsci-content': DsmSciContent,
    'detail-image': DetailImage,
  },
  data() {
    return {
      height: '0%',
      display: 'inline-block',
    };
  },
  computed: {
    ...mapGetters({
      onModal: 'getOnModal',
    }),
    ...mapGetters({
      detailImage: 'getDetailImage',
    }),
    ...mapGetters({
      detailImageId: 'getClickContendId',
    }),
    ...mapGetters({
      imgLink: 'getDetailImgLink',
    }),
    ...mapGetters({
      title: 'getDetailImgTitle',
    }),
    computedHeight() {
      this.setDetailImage();
      return this.height;
    },
    computedDisplay() {
      this.setDetailImage();
      return this.display;
    },
    computedMode() {
      switch (Number(this.detailImageId)) {
        case 7:
        case 9:
        case 10:
        case 13:
        case 15:
        case 19:
        case 25:
          return 'rotate(270deg)';
        default:
          return 'rotate(0deg)';
      }
    },
  },
  methods: {
    ...mapActions(['clickDetailImage']),
    ...mapActions(['contentInfo']),
    setDetailImage() {
      if (this.detailImage) {
        this.height = '100%';
        this.display = 'inline-block';
      } else {
        this.height = '';
        this.display = '';
      }
    },
    clickDetailImageClose() {
      this.clickDetailImage({
        detailImage: false,
        detailImgLink: '',
        detailImgTitle: '',
      });
    },
  },
};
</script>

<style lang="scss">
</style>
