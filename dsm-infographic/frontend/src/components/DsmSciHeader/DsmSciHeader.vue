<template>
  <div id="dsmSciHeader">
    <!-- DSMHS 로고 -->
    <div class="dsmsci-logo">
      <h1>
        <a href="/">{{ title }}</a>
      </h1>
    </div>

    <!-- DSM 로그인(학번/비밀번호) 버튼 -->
    <div v-if="this.isAuth">
      <div class="login-user-wrap">
        <div class="login-ok">
          <button class="login-user">{{ this.uname }}</button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="login-oepn-wrap">
        <div class="login-open">
          <button
            id="loginOpen"
            v-on:click="clickLoginOpen"
            class="login-button"
            type="button"> 로그인</button>
        </div>
      </div>

      <dsmsci-login
        v-on:click-login-close="clickLoginClose"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import DsmSciLogin from './DsmSciLogin.vue';

export default {
  name: 'dsmsci-header',
  props: {
    title: String,
  },
  data() {
    return {
      loginHeight: '0%',
      loginDisplay: 'none',
    };
  },
  components: {
    'dsmsci-login': DsmSciLogin,
  },
  computed: {
    ...mapGetters(['getUName']),
    ...mapGetters(['getIsAuth']),
    ...mapState(['uname']),
    ...mapState(['isAuth']),
  },
  watch: {
    getLoginClick() {
      if (this.getLoginClick === true) {
        this.clickLoginOpen();
      } else {
        this.clickLoginClose();
      }
    },
  },
  methods: {
    ...mapActions(['onClickModal']),
    ...mapActions(['clickLogin']),
    clickLoginOpen() {
      this.onClickModal({ onModal: true });
      this.clickLogin({
        height: '100%',
        display: 'inline-block',
      });
    },
    clickLoginClose() {
      this.onClickModal({ onModal: false });
      this.clickLogin({
        height: '0%',
        display: 'none',
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/header/header.scss";
</style>
