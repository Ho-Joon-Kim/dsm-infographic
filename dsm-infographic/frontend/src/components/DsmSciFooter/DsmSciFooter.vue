<template>
  <div id="dsmSciFooter" class="dsmsci-footer">
    <p class="copyright">
      &copy; {{ computedYear }}
      <a :href="copyrightLink">대덕소프트웨어마이스터고등학교 과학과.</a>
    </p>
    <p class="notice">
      이 사이트는 대덕SW마이스터고등학교 과학과에서 1학년을 대상으로 실시한 기후 인포그래픽 평가를 위한 사이트입니다.
    </p>
    <p class="notice">
      본 사이트에 대한 소스는 <a :href="srcLink">이곳</a>에서 확인할 수 있습니다.
    </p>
  </div>
</template>

<script>
export default {
  name: 'dsmsci-footer',
  data() {
    return {
      copyrightLink: 'https://cafe.naver.com/dsmhssci2019.cafe',
      srcLink: 'https://github.com/Ho-Joon-Kim/dsm-infographic',
    };
  },
  computed: {
    computedYear() {
      const date = new Date();
      return date.getUTCFullYear();
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/footer/footer.scss";
</style>
