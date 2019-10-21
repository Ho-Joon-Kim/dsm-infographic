<template>
  <div id="infographicGallery" class="infographic-gallery">
    <div id="infographicWrap" class="infographic-wrap">
      <infographic-content contentId="1" title="Test-1" desc="Test-1 Desc" imgLink="http://localhost:3000/infographic/1/1.PNG"/>
      <infographic-content contentId="2" title="Test-2" desc="Test-2 Desc" imgLink="http://localhost:3000/infographic/1/2.PNG"/>
      <infographic-content contentId="3" title="Test-3" desc="Test-3 Desc" imgLink="http://localhost:3000/infographic/1/3.PNG"/>
      <infographic-content contentId="4" title="Test-4" desc="Test-4 Desc" imgLink="http://localhost:3000/infographic/1/4.PNG"/>
      <infographic-content contentId="5" title="Test-5" desc="Test-5 Desc" imgLink="http://localhost:3000/infographic/1/5.PNG"/>
      <infographic-content contentId="1" title="Test-1" desc="Test-1 Desc" imgLink="http://localhost:3000/infographic/1/6.PNG"/>
      <infographic-content contentId="2" title="Test-2" desc="Test-2 Desc" imgLink="http://localhost:3000/infographic/1/7.PNG"/>
      <infographic-content contentId="3" title="Test-3" desc="Test-3 Desc" imgLink="http://localhost:3000/infographic/1/1.PNG"/>
      <infographic-content contentId="4" title="Test-4" desc="Test-4 Desc" imgLink="http://localhost:3000/infographic/1/2.PNG"/>
      <infographic-content contentId="5" title="Test-5" desc="Test-5 Desc" imgLink="http://localhost:3000/infographic/1/3.PNG"/>
      <infographic-content contentId="1" title="Test-1" desc="Test-1 Desc" imgLink="http://localhost:3000/infographic/1/4.PNG"/>
      <infographic-content contentId="2" title="Test-2" desc="Test-2 Desc" imgLink="http://localhost:3000/infographic/1/5.PNG"/>
      <infographic-content contentId="3" title="Test-3" desc="Test-3 Desc" imgLink="http://localhost:3000/infographic/1/6.PNG"/>
      <infographic-content contentId="4" title="Test-4" desc="Test-4 Desc" imgLink="http://localhost:3000/infographic/1/7.PNG"/>
      <infographic-content contentId="5" title="Test-5" desc="Test-5 Desc" imgLink="http://localhost:3000/infographic/1/1.PNG"/>
      <infographic-content contentId="1" title="Test-1" desc="Test-1 Desc" imgLink="http://localhost:3000/infographic/1/2.PNG"/>
      <infographic-content contentId="2" title="Test-2" desc="Test-2 Desc" imgLink="http://localhost:3000/infographic/1/3.PNG"/>
      <infographic-content contentId="3" title="Test-3" desc="Test-3 Desc" imgLink="http://localhost:3000/infographic/1/4.PNG"/>
      <infographic-content contentId="4" title="Test-4" desc="Test-4 Desc" imgLink="http://localhost:3000/infographic/1/5.PNG"/>
      <infographic-content contentId="5" title="Test-5" desc="Test-5 Desc" imgLink="http://localhost:3000/infographic/1/6.PNG"/>
      <infographic-content contentId="1" title="Test-1" desc="Test-1 Desc" imgLink="http://localhost:3000/infographic/1/7.PNG"/>
      <infographic-content contentId="5" title="Test-5" desc="Test-5 Desc" imgLink="http://localhost:3000/infographic/1/1.PNG"/>
      <infographic-content contentId="1" title="Test-1" desc="Test-1 Desc" imgLink="http://localhost:3000/infographic/1/2.PNG"/>
      <infographic-content contentId="2" title="Test-2" desc="Test-2 Desc" imgLink="http://localhost:3000/infographic/1/3.PNG"/>
      <infographic-content contentId="3" title="Test-3" desc="Test-3 Desc" imgLink="http://localhost:3000/infographic/1/4.PNG"/>
      <infographic-content contentId="4" title="Test-4" desc="Test-4 Desc" imgLink="http://localhost:3000/infographic/1/5.PNG"/>
      <infographic-content contentId="5" title="Test-5" desc="Test-5 Desc" imgLink="http://localhost:3000/infographic/1/6.PNG"/>
    </div>
  </div>
</template>

<script>
import InfographicContent from '@/components/DsmSciContent/InfographicGallery/InfographicContent.vue';

export default {
  name: 'infographic-gallery',
  components: {
    'infographic-content': InfographicContent,
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-gallery.scss";
</style>
