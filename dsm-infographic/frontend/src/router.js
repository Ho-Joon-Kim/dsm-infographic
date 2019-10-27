import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/Admin.vue';
import store from '@/vuex/store';

Vue.use(Router);

const requireAdmin = () => (from, to, next) => {
  if (store.getters.getAdminCheck) return next(); // isAuth === true면 페이지 이동
  return next('/'); // isAuth === false면 다시 로그인 화면으로 이동
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: requireAdmin(),
    },
  ],
});
