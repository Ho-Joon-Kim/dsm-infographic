<template>
  <div id="app">
    <div id="dsmSciHeader">
      <dsmsci-header title="DSM 1학년들의 기후 시그널 인포그래픽 온라인 전시회"/>
    </div>
    <router-view/>

    <footer id="dsmSciFooter">
      <dsmsci-footer/>
    </footer>
  </div>
</template>

<script>
import DsmSciHeader from './components/DsmSciHeader.vue';
import DsmSciFooter from './components/DsmSciFooter.vue';

export default {
  name: 'App',
  components: {
    'dsmsci-header': DsmSciHeader,
    'dsmsci-footer': DsmSciFooter
  }
}
</script>