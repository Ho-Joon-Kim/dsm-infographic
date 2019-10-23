import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  /* Login */
  uid: '',
  uname: '',
  surveyErrorState: '',
  isAuth: false,
  /* Survey */
  surveyErrorState: '',
  surveyIsOk: false,
  /* Click Infographic */
  clickContentId: '',
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
