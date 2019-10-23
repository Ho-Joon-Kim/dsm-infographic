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
  /* Modal */
  [types.ON_MODAL](state, onModal) {
    state.onModal = onModal;
  },
};
