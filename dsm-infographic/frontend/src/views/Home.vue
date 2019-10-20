<template>
  <div id="dsmSciHome" class="dsmsci-home">
    <dsmsci-content/>
  </div>
</template>

<script>
import DsmSciContent from '@/components/DsmSciContent/DsmSciContent.vue';

export default {
  name: 'home',
  components: {
    'dsmsci-content': DsmSciContent,
  },
};
</script>

<style lang="scss">
</style>
