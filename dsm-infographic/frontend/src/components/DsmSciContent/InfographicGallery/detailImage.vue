<template>
  <div id="detailImage" class="detail-image">
    <div
      class="img-background"
      v-bind:style="{ height: computedHeight }"
    ></div>
    <div
      class="img-content"
      v-bind:style="{ display: computedDisplay }"
    >
      <button
        id="imgClose"
        class="closebtn"
        type="button"
        v-on:click="clickDetailImageClose"
      >&times;</button>
      <div
        class="detail-img"
        v-bind:style="{
          transform: computedMode,
        }"
      >
        <img class="detail--img" :src="imgLink" :alt="title">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'detail-image',
  props: {
    title: String,
    imgLink: String,
    height: String,
    display: String,
    mode: String,
  },
  computed: {
    computedHeight() {
      return this.height;
    },
    computedDisplay() {
      return this.display;
    },
    computedMode() {
      return this.mode;
    },
  },
  methods: {
    clickDetailImageClose() {
      this.$emit('click-image-close');
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/detail-image.scss";
</style>
