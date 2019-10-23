<template>
  <div id="infographicGallery" class="infographic-gallery" :class="{ notScroll: onModal}">
    <div id="infographicWrap" class="infographic-wrap">
      <infographic-content
        v-for="info in infos"
        :key="info.contentId"
        v-bind:contentId="info.contentId"
        v-bind:title="info.title"
        v-bind:desc="info.desc"
        v-bind:imgLink="info.img"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InfographicContent from '@/components/DsmSciContent/InfographicGallery/InfographicContent.vue';

export default {
  name: 'infographic-gallery',
  data() {
    return {
      infos: [
        {
          contentId: '1',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '2',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '3',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '4',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '5',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '6',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '7',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '8',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '9',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '10',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
        {
          contentId: '11',
          title: 'Hello',
          desc: 'world',
          img: 'http://localhost:3000/info/1.PNG',
        },
      ],
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
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/content/infographic-gallery/infographic-gallery.scss";
</style>
