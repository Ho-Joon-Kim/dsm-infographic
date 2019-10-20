<template>
  <div id="dsmSciContent" class="dsmsci-content">
    <infographic-banner/>
    <infographic-gallery/>
  </div>
</template>

<script>
import InfographicGallery from '@/components/DsmSciContent/InfographicGallery/InfographicGallery.vue';
import InfographicBanner from '@/components/DsmSciContent/InfographicBanner/InfographicBanner.vue';

export default {
  name: 'dsmsci-content',
  components: {
    'infographic-gallery': InfographicGallery,
    'infographic-banner': InfographicBanner,
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/content.scss";
</style>
