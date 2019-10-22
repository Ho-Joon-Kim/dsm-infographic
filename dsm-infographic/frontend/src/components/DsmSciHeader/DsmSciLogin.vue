<template>
  <!-- DSM 로그인(학번/비밀번호) -->
  <div id="dsmSciLogin" class="dsmsci-login">
    <div
      id="loginBackground"
      class="login-background"
      v-bind:style="{ height: computedHeight }"
      v-on:click="clickLoginClose"
    >
    </div>
    <div
      id="loginContent"
      class="login-content"
      v-bind:style="{ display: computedDisplay }"
    >
      <button
        id="loginClose"
        class="closebtn"
        type="button"
        v-on:click="clickLoginClose"
      >&times;</button>
      <div class="login-form">
        <div class="input-wrap">
          <div class="id-wrap">
            <div class="input-title">아이디</div>
            <input
              v-model="userId"
              type="text"
              title="아이디 입력"
              placeholder="아이디 입력"
              id="loginId"
              class="login-input"
              autocomplete="off"
            />
          </div>
          <div class="pw-wrap">
            <div class="input-title">비밀번호</div>
            <input
              v-model="userPw"
              type="password"
              title="비밀번호 입력"
              placeholder="비밀번호 입력"
              id="loginPw"
              class="login-input"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="submit-wrap">
          <button
            v-on:click="onSubmit"
            type="submit"
            id="loginSubmit"
            class="login-submit"
          >로그인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'dsmsci-login',
  props: {
    height: String,
    display: String,
  },
  data() {
    return {
      userId: '',
      userPw: '',
      ok: false,
      result: null,
    };
  },
  computed: {
    computedHeight() {
      return this.height;
    },
    computedDisplay() {
      return this.display;
    },
    ...mapGetters({
      errorState: 'getErrorState',
    }),
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit() {
      await this.login({ uid: this.userId, pswd: this.userPw });
      this.clickLoginClose();
    },
    clickLoginClose() {
      this.$emit('click-login-close');
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/header/login.scss";
</style>
