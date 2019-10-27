import * as types from './mutation_types';

export default {
  /* Login */
  [types.UID](state, uid) {
    state.uid = uid;
  },
  [types.UNAME](state, uname) {
    state.uname = uname;
  },
  [types.LOGIN_ERROR_STATE](state, loginErrorState) {
    state.loginErrorState = loginErrorState;
  },
  [types.IS_AUTH](state, isAuth) {
    state.isAuth = isAuth;
  },
  [types.LOGIN_HEIGHT](state, loginHeight) {
    state.loginHeight = loginHeight;
  },
  [types.LOGIN_DISPLAY](state, loginDisplay) {
    state.loginDisplay = loginDisplay;
  },
  [types.ADMIN_CHECK](state, adminCheck) {
    state.adminCheck = adminCheck;
  },
  /* Survey */
  [types.SURVEY_ERROR_STATE](state, surveyErrorState) {
    state.surveyErrorState = surveyErrorState;
  },
  [types.SURVEY_IS_OK](state, surveyIsOk) {
    state.surveyIsOk = surveyIsOk;
  },
  /* Click Infographic */
  [types.CLICK_CONTENT_ID](state, clickContentId) {
    state.clickContentId = clickContentId;
  },
  /* Click Detail Image */
  [types.DETAIL_IMAGE](state, detailImage) {
    state.detailImage = detailImage;
  },
  [types.DETAIL_IMG_LINK](state, detailImgLink) {
    state.detailImgLink = detailImgLink;
  },
  [types.DETAIL_IMG_TITLE](state, detailImgTitle) {
    state.detailImgTitle = detailImgTitle;
  },
  /* Modal */
  [types.ON_MODAL](state, onModal) {
    state.onModal = onModal;
  },
};
