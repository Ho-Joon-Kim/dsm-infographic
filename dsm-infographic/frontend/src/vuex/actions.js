import {
  UID, UNAME, IS_AUTH, ERROR_STATE,
  CLICK_CONTENT_ID,
} from './mutation_types';

import api from '../service';

/* Login */

const setUID = ({ commit }, data) => {
  commit(UID, data);
};

const setUNAME = ({ commit }, data) => {
  commit(UNAME, data);
};

const setErrorState = ({ commit }, data) => {
  commit(ERROR_STATE, data);
};

const setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data);
};

const processResponse = (store, loginResponse) => {
  if (loginResponse.loginchk) {
    setUNAME(store, loginResponse.username);
    setErrorState(store, '');
    setIsAuth(store, true);
  } else {
    setErrorState(store, '로그인에 실패하셨습니다');
    setIsAuth(store, false);
  }
};

/* Click Infographic */
const setClickContentId = ({ commit }, data) => {
  commit(CLICK_CONTENT_ID, data);
};

export default {
  async login(store, { uid, pswd }) {
    const loginResponse = await api.login(uid, pswd);
    processResponse(store, loginResponse.data);
    setUID(store, uid);
    return store.getters.getIsAuth;
  },
  clickContent(store, { contentId }) {
    setClickContentId(store, contentId);
  },
};
