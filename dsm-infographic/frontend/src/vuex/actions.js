import api from '../service';
import {
  /* Login */
  UID,
  UNAME,
  IS_AUTH,
  LOGIN_ERROR_STATE,
  /* Survey */
  SURVEY_ERROR_STATE,
  SURVEY_IS_OK,
  /* Click Infographic */
  CLICK_CONTENT_ID,
  /* Modal */
  ON_MODAL,
} from './mutation_types';

/* Login */
const setUID = ({ commit }, data) => {
  commit(UID, data);
};

const setUNAME = ({ commit }, data) => {
  commit(UNAME, data);
};

const setLoginErrorState = ({ commit }, data) => {
  commit(LOGIN_ERROR_STATE, data);
};

const setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data);
};

const processLoginResponse = (store, loginResponse) => {
  if (loginResponse.loginchk) {
    setUNAME(store, loginResponse.username);
    setLoginErrorState(store, '');
    setIsAuth(store, true);
  } else {
    setLoginErrorState(store, '로그인에 실패하셨습니다');
    setIsAuth(store, false);
  }
};

/* Survey */
const setSurveyErrorState = ({ commit }, data) => {
  commit(SURVEY_ERROR_STATE, data);
};

const setSurveyIsOk = ({ commit }, data) => {
  commit(SURVEY_IS_OK, data);
};

const processSurveyResponse = (store, surveyResponse) => {
  if (surveyResponse.output) {
    setSurveyErrorState(store, '');
    setSurveyIsOk(store, true);
  } else {
    setSurveyErrorState(store, '제출에 실패하셨습니다');
    setSurveyIsOk(store, false);
  }
};

/* Click Infographic */
const setClickContentId = ({ commit }, data) => {
  commit(CLICK_CONTENT_ID, data);
};

/* Modal */
const setOnModal = ({ commit }, data) => {
  commit(ON_MODAL, data);
};

/* Export */
export default {
  async login(store, { uid, pswd }) {
    const loginResponse = await api.login(uid, pswd);
    processLoginResponse(store, loginResponse.data);
    setUID(store, uid);
    return store.getters.getIsAuth;
  },
  async survey(store, {
    q1, q2, contentId, uid,
  }) {
    const surveyResponse = await api.survey(q1, q2, contentId, uid);
    processSurveyResponse(store, surveyResponse.data);
    return store.getters.getSurveyIsOk;
  },
  clickContent(store, { contentId }) {
    setClickContentId(store, contentId);
  },
  onClickModal(store, { onModal }) {
    setOnModal(store, onModal);
  },
};
