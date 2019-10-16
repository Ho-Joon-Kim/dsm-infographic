<template>
  <div id="dsmSciHome" class="dsmsci-home">
    <infograpic-gallery/>
  </div>
</template>

<script>
import InfographicGallery from './components/InfographicGallery/InfographicGallery.vue';

export default {
  name: 'home',
  components: {
    'infographic-gallery': InfographicGallery,
  },
};
</script>

<style lang="scss">
</style>
