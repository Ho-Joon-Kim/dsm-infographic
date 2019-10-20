import * as types from './mutation_types';

export default {
  [types.UNAME](state, uname) {
    state.uname = uname;
  },
  [types.ERROR_STATE](state, errorState) {
    state.errorState = errorState;
  },
  [types.IS_AUTH](state, isAuth) {
    state.isAuth = isAuth;
  },
};
