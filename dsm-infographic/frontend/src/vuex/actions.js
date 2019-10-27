import api from '../service';
import {
  /* Login */
  UID,
  UNAME,
  IS_AUTH,
  LOGIN_ERROR_STATE,
  LOGIN_HEIGHT,
  LOGIN_DISPLAY,
  ADMIN_CHECK,
  /* Survey */
  SURVEY_ERROR_STATE,
  SURVEY_IS_OK,
  /* Click Infographic */
  CLICK_CONTENT_ID,
  /* Click Detail Image */
  DETAIL_IMAGE,
  DETAIL_IMG_LINK,
  DETAIL_IMG_TITLE,
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

const setLoginHeight = ({ commit }, data) => {
  commit(LOGIN_HEIGHT, data);
};

const setLoginDisplay = ({ commit }, data) => {
  commit(LOGIN_DISPLAY, data);
};

const setAdminCheck = ({ commit }, data) => {
  commit(ADMIN_CHECK, data);
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
  if (surveyResponse.output === 'done') {
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

/* Click Detail Image */
const setDetailImgTitle = ({ commit }, data) => {
  commit(DETAIL_IMG_TITLE, data);
};
const setDetailImgLink = ({ commit }, data) => {
  commit(DETAIL_IMG_LINK, data);
};

const setDetailImage = ({ commit }, data) => {
  commit(DETAIL_IMAGE, data);
};

/* Modal */
const setOnModal = ({ commit }, data) => {
  commit(ON_MODAL, data);
};

/* Export */
export default {
  clickLogin(store, { height, display }) {
    setLoginHeight(store, height);
    setLoginDisplay(store, display);
  },
  async login(store, { uid, pswd }) {
    if (uid === 'admin' || uid === 'dev') {
      setAdminCheck(store, true);
    } else {
      setAdminCheck(store, false);
    }
    const loginResponse = await api.login(uid, pswd);
    processLoginResponse(store, loginResponse.data);
    if (store.getters.getIsAuth) {
      setUID(store, uid);
    }
    return store.getters.getIsAuth;
  },
  loginErrorClose(store) {
    setLoginErrorState(store, '');
  },
  async survey(store, {
    q1, q2, contentId, uid,
  }) {
    const surveyResponse = await api.survey(q1, q2, contentId, uid);
    processSurveyResponse(store, surveyResponse.data);
    return store.getters.getSurveyIsOk;
  },
  async contentInfo(store, { contentId }) {
    const contentResponse = await api.contentInfo(contentId);
    return contentResponse;
  },
  async surveyResult(store, { contentId }) {
    if (
      store.getters.getUID === 'admin'
      || store.getters.getUID === 'dev'
    ) {
      const surveyResultResponse = await api.surveyResult(contentId);
      return surveyResultResponse;
    }
    return false;
  },
  clickContent(store, { contentId }) {
    setClickContentId(store, contentId);
  },
  onClickModal(store, { onModal }) {
    setOnModal(store, onModal);
  },
  clickDetailImage(store, { detailImage, detailImgLink, detailImgTitle }) {
    setDetailImgTitle(store, detailImgTitle);
    setDetailImgLink(store, detailImgLink);
    setDetailImage(store, detailImage);
  },
};
