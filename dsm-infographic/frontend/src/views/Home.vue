<template>
  <div id="dsmSciHome" class="dsmsci-home">
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
    <div class="surveyCloseWrap"
    v-if="getIsAuth && !getAdminCheck && getSurveyLast && !getSurveyFinish">
      <button
        class="surveyCloseButton"
        v-on:click="surveyClose"
      >평가 종료
      </button>
    </div>
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
    ...mapGetters(['getIsAuth']),
    ...mapGetters(['getSurveyFinish']),
    ...mapGetters(['getSurveyLast']),
    ...mapGetters(['getAdminCheck']),
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
    surveyClose() {
      this.goLastSurvey();
    },
    goLastSurvey() {
      this.$router.push({
        name: 'last',
      });
    },
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
/*
<div clas="surveyCloseWrap">
      <button
        class="surveyCloseButton"
        v-on:click="surveyClose"
      >평가 종료
      </button>
    </div>
*/
.surveyCloseWrap {
  display: inline-block;
  width: 200px;
  height: 80px;
  position: fixed;
  bottom: 40px;
  right: 50px;
  margin-top: -10px;
  margin-left: -50px;
  z-index: $index-3;

  .surveyCloseButton {
    width: 200px;
    height: 80px;
    padding: 20px;
    text-align: center;
    background-color: $white-color;
    color: $primary-color;
    border-radius: 80px;
    font-size: $font-size-3;
    border: 3px solid $primary-color;
    transition: 0.3s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transitoin: 0.5s;
    -moz-box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
    -webkit-box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
    box-shadow: 0 5px 5px 0 rgba(0,0,0,.2);
    transition: 0.3s;

    &:hover {
      font-weight: bold;
      color: $white-color;
      background-color: $primary-color;
      font-size: $font-size-1;
    }
  }
}
</style>
