<template>
  <div id="dsmSciHome" class="dsmsci-home" :class="{ notScroll: onModal}">
    <dsmsci-content/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DsmSciContent from '@/components/DsmSciContent/DsmSciContent.vue';

export default {
  name: 'home',
  components: {
    'dsmsci-content': DsmSciContent,
  },
  computed: {
    ...mapGetters({
      onModal: 'getOnModal',
    }),
  },
};
</script>

<style lang="scss">
</style>
