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
        v-bind:height="loginHeight"
        v-bind:display="loginDisplay"
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
  methods: {
    ...mapActions(['onClickModal']),
    clickLoginOpen() {
      this.loginHeight = '100%';
      this.loginDisplay = 'inline-block';
      this.onClickModal({ onModal: true });
    },
    clickLoginClose() {
      this.loginHeight = '0%';
      this.loginDisplay = 'none';
      this.onClickModal({ onModal: false });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/header/header.scss";
</style>
