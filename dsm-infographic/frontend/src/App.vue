<template>
  <div id="app">
    <dsmsci-header title="DSM 1학년들의 기후 시그널 인포그래픽 온라인 전시회" />
    <router-view />
    <dsmsci-footer />
  </div>
</template>

<script>
import DsmSciHeader from './components/DsmSciHeader/DsmSciHeader.vue';
import DsmSciFooter from './components/DsmSciFooter/DsmSciFooter.vue';

export default {
  name: 'App',
  components: {
    'dsmsci-header': DsmSciHeader,
    'dsmsci-footer': DsmSciFooter,
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/base.scss";
</style>
