import * as types from './mutation_types';

export default {
  /* Login */
  [types.UID](state, uid) {
    state.uid = uid;
  },
  [types.UNAME](state, uname) {
    state.uname = uname;
  },
  [types.ERROR_STATE](state, errorState) {
    state.errorState = errorState;
  },
  [types.IS_AUTH](state, isAuth) {
    state.isAuth = isAuth;
  },
  /* Click Infographic */
  [types.CLICK_CONTENT_ID](state, clickContentId) {
    state.clickContentId = clickContentId;
  },
};
