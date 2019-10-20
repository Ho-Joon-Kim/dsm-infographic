<template>
  <div class="infographic-content"  :class="contentId">
    <div class="infographic-info">
      <div class="infographic-desc">
        <p class="infographic--desc">{{ desc }}</p>
      </div>
      <div class="infographic-img">
        <img class="infographic--img" src="" width="100%" :alt="title">
      </div>
    </div>
    <div class="infographic-title">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infographic-content',
  props: {
    contentId: String,
    title: String,
    desc: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-content.scss";
</style>
