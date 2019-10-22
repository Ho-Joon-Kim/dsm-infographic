<template>
  <div id="dsmSciContent" class="dsmsci-content">
    <infographic-gallery/>
  </div>
</template>

<script>
import InfographicGallery from '@/components/DsmSciContent/InfographicGallery/InfographicGallery.vue';

export default {
  name: 'dsmsci-content',
  components: {
    'infographic-gallery': InfographicGallery,
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/content.scss";
</style>
