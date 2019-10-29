import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/Admin.vue';
import Last from './views/Last.vue';
import store from '@/vuex/store';

Vue.use(Router);

const requireAdmin = () => (from, to, next) => {
  if (store.getters.getAdminCheck) return next();
  return next('/');
};

const checkLast = () => (from, to, next) => {
  if (store.getters.getUID && !store.getters.getAdminCheck) return next();
  // if (store.getters.getSurveyLast === false) return next('/');
  return next('/');
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
    {
      path: '/last',
      name: 'last',
      component: Last,
      beforeEnter: checkLast(),
    },
  ],
});
