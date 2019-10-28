<template>
  <div id="dsmSciHeader">
    <!-- DSMHS 로고 -->
    <div class="dsmsci-logo">
      <h1>
        <a
         href="javascript:void(0)"
         v-on:click="goHome"
        >{{ title }}</a>
      </h1>
    </div>

    <!-- DSM 로그인(학번/비밀번호) 버튼 -->
    <div v-if="this.loginErrorState !== ''" class="login-error">
      <button
        id="errorClose"
        class="error-closebtn"
        type="button"
        v-on:click="clickErrorClose"
      >&times;</button>
      <h1>로그인 실패</h1>
      <p>{{ this.loginErrorState }}</p>
    </div>

    <div v-if="this.isAuth && !this.adminCheck">
      <div class="login-user-wrap">
        <div class="login-ok">
          <button
            class="login-user"
            v-on:click="logout"
          >{{ this.uname }}</button>
        </div>
      </div>
    </div>

    <div v-else-if="this.isAuth && this.adminCheck">
      <div class="login-user-wrap">
        <div class="login-ok">
          <button
            class="login-user admin-button"
            v-on:click="goAdmin"
          >{{ this.uname }}</button>
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
    ...mapGetters({
      adminCheck: 'getAdminCheck',
    }),
    ...mapGetters({
      loginErrorState: 'getLoginErrorState',
    }),
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
    ...mapActions(['loginErrorClose']),
    clickLoginOpen() {
      this.clickErrorClose();
      this.onClickModal({ onModal: true });
      this.clickLogin({
        height: '100%',
        display: 'inline-block',
      });
    },
    clickLogoutOpen() {
      // 로그아웃 구현
    },
    clickLoginClose() {
      this.onClickModal({ onModal: false });
      this.clickLogin({
        height: '0%',
        display: 'none',
      });
    },
    clickErrorClose() {
      this.loginErrorClose();
    },
    goAdmin() {
      this.$router.push({
        name: 'admin',
      });
    },
    goHome() {
      this.$router.push({
        name: 'home',
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/header/header.scss";
</style>
