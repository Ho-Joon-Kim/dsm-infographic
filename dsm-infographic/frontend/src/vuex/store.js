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
  loginErrorState: '',
  isAuth: false,
  loginHeight: '0%',
  loginDisplay: 'none',
  adminCheck: false,
  adminPageCheck: false,
  /* Survey */
  surveyErrorState: '',
  surveyIsOk: false,
  surveySubmitCount: '',
  surveySubmitList: [],
  surveyPostQ1: '',
  surveyPostQ2: '',
  surveyPostContentId: '',
  surveyOverlapCheck: false,

  /* Click Infographic */
  clickContentId: '',
  /* Click Detail Image */
  detailImgLink: '',
  detailImgTitle: '',
  detailImage: false,
  /* Notice */
  noticeTitle: '',
  noticeBody: '',
  noticeButton: '',
  noticeHeight: '0%',
  noticeDisplay: 'none',
  /* Modal */
  onModal: false,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
