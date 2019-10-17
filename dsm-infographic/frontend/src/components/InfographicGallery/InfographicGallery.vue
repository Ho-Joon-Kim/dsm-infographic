<template>
  <div id="infographicGallery" class="infographic-gallery">
    <div id="infographicWrap" class="infographic-wrap">
      <infographic-content contentId="1" title="Test" desc="Test Desc"/>
    </div>
  </div>
</template>

<script>
import InfographicContent from '@/components/InfographicGallery/InfographicContent.vue';

export default {
  name: 'infographic-gallery',
  components: {
    'infographic-content': InfographicContent,
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/infographic-gallery/infographic-gallery.scss";
</style>
