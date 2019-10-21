import { UNAME, IS_AUTH, ERROR_STATE } from './mutation_types';
import api from '../service';

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

export default {
  async login(store, { uid, pswd }) {
    const loginResponse = await api.login(uid, pswd);
    processResponse(store, loginResponse.data);
    return store.getters.getIsAuth;
  },
};