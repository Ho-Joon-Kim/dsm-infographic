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
  ADMIN_PAGE_CHECK,
  /* Survey */
  SURVEY_ERROR_STATE,
  SURVEY_IS_OK,
  SURVEY_SUBMIT_LIST,
  SURVEY_SUBMIT_COUNT,
  SURVEY_POST_Q1,
  SURVEY_POST_Q2,
  SURVEY_POST_CONTENTID,
  SURVEY_LAST,
  SURVEY_FINISH,
  /* Click Infographic */
  CLICK_CONTENT_ID,
  /* Click Detail Image */
  DETAIL_IMAGE,
  DETAIL_IMG_LINK,
  DETAIL_IMG_TITLE,
  /* Modal */
  ON_MODAL,
  /* Notice */
  NOTICE_TITLE,
  NOTICE_BODY,
  NOTICE_BUTTON,
  NOTICE_HEIGHT,
  NOTICE_DISPLAY,
  SURVEY_OVERLAP_CHECK,
  USER_CONTENTID,
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

const setAdminPageCheck = ({ commit }, data) => {
  commit(ADMIN_PAGE_CHECK, data);
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

const setSurveySubmitList = ({ commit }, data) => {
  commit(SURVEY_SUBMIT_LIST, data);
};

const setSurveySubmitCount = ({ commit }, data) => {
  commit(SURVEY_SUBMIT_COUNT, data);
};

const setSurveyOverlapCheckCheck = ({ commit }, data) => {
  commit(SURVEY_OVERLAP_CHECK, data);
};

const surveySubmitOverlapCheckBool = (store, contentId) => {
  const surveySubmitCount = store.getters.getSurveySubmitCount;
  const surveySubmitList = store.getters.getSurveySubmitList;
  for (let i = 1; i <= surveySubmitCount; i += 1) {
    if (String(surveySubmitList[i]) === String(contentId)) {
      setSurveyOverlapCheckCheck(store, true);
      return true;
    }
  }
  setSurveyOverlapCheckCheck(store, false);
  return false;
};

const setSurveyLast = ({ commit }, data) => {
  commit(SURVEY_LAST, data);
};

const processSurveyOverlapCheckResponse = (store, surveyOverlapCheckResponse) => {
  const surveySubmitNum = surveyOverlapCheckResponse.survey_num;
  const surveySubmitCount = surveyOverlapCheckResponse.survey_count;
  const surveySubmitList = surveySubmitNum.split(' ');
  setSurveySubmitList(store, surveySubmitList);
  setSurveySubmitCount(store, surveySubmitCount);
  if (Number(surveySubmitCount) >= Number(26)) {
    setSurveyLast(store, true);
  }
};

const surveyOverlapCheck = async (store, uid) => {
  const surveyOverlapCheckResponse = await api.surveyOverlapCheck(uid);
  processSurveyOverlapCheckResponse(store, surveyOverlapCheckResponse.data);
};

const setUserContentId = ({ commit }, data) => {
  commit(USER_CONTENTID, data);
};

const processSurveyResponse = (store, surveyResponse) => {
  surveyOverlapCheck(store, store.getters.getUID);
  if (surveySubmitOverlapCheckBool(store, store.getters.getSurveyPostContentId) === true) {
    setSurveyErrorState(store, '이미 평가한 작품입니다');
    setSurveyIsOk(store, false);
    setSurveyOverlapCheckCheck(store, true);
    return;
  }
  setSurveyOverlapCheckCheck(store, false);

  if (surveyResponse.output === 'done') {
    setSurveyErrorState(store, '');
    setSurveyIsOk(store, true);
  } else if (surveyResponse.output === 'error') {
    setSurveyErrorState(store, '자신의 작품은 평가할 수 없습니다');
    setSurveyIsOk(store, false);
  } else {
    setSurveyErrorState(store, '제출 실패');
    setSurveyIsOk(store, false);
  }
};

const setSurveyPostQ1 = ({ commit }, data) => {
  commit(SURVEY_POST_Q1, data);
};

const setSurveyPostQ2 = ({ commit }, data) => {
  commit(SURVEY_POST_Q2, data);
};

const setSurveyPostContentId = ({ commit }, data) => {
  commit(SURVEY_POST_CONTENTID, data);
};

const setSurveyFinish = ({ commit }, data) => {
  commit(SURVEY_FINISH, data);
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

/* Notice */
const setNoticeTitle = ({ commit }, data) => {
  commit(NOTICE_TITLE, data);
};
const setNoticeBody = ({ commit }, data) => {
  commit(NOTICE_BODY, data);
};
const setNoticeButton = ({ commit }, data) => {
  commit(NOTICE_BUTTON, data);
};
const setNoticeHeight = ({ commit }, data) => {
  commit(NOTICE_HEIGHT, data);
};
const setNoticeDisplay = ({ commit }, data) => {
  commit(NOTICE_DISPLAY, data);
};

/* Export */
export default {
  /* Login */
  clickLogin(store, { height, display }) {
    setLoginHeight(store, height);
    setLoginDisplay(store, display);
  },
  logout(store) {
    setNoticeTitle(store, '');
    setNoticeBody(store, '');
    setNoticeButton(store, '');
    setNoticeHeight(store, '0%');
    setNoticeDisplay(store, 'none');
    setUID(store, '');
    setUNAME(store, '');
    setLoginErrorState(store, '');
    setIsAuth(store, false);
    setAdminCheck(store, false);
    setLoginDisplay(store, 'none');
    setLoginHeight(store, '0%');
  },
  async login(store, { uid, pswd }) {
    if (uid === '0000' || uid === '9999') {
      setAdminCheck(store, true);
    } else {
      setAdminCheck(store, false);
    }
    const loginResponse = await api.login(uid, pswd);
    processLoginResponse(store, loginResponse.data);

    if (store.getters.getLoginErrorState !== '') {
      setNoticeTitle(store, '로그인 실패');
      setNoticeBody(store, '로그인에 실패하셨습니다');
      setNoticeButton(store, '확인');
      setNoticeHeight(store, '100%');
      setNoticeDisplay(store, 'inline-block');
    } else {
      setNoticeTitle(store, '');
      setNoticeBody(store, '');
      setNoticeButton(store, '');
      setNoticeHeight(store, '0%');
      setNoticeDisplay(store, 'none');
    }
    if (store.getters.getIsAuth) {
      setUID(store, uid);
    }
    return store.getters.getIsAuth;
  },
  loginErrorClose(store) {
    setLoginErrorState(store, '');
  },
  setAdminPageCheck(store, { adminPageCheck }) {
    setAdminPageCheck(store, adminPageCheck);
  },
  /* Get ContentInfo */
  async contentInfo(store, { contentId }) {
    const contentResponse = await api.contentInfo(contentId);
    return contentResponse;
  },
  /* Survey */
  setSurveyLastLast(store, { surveyLast }) {
    setSurveyLast(store, surveyLast);
  },
  async surveyRanking(store, { rank1, rank2, rank3 }) {
    const surveyRankingResponse = await api.surveyRanking(rank1, rank2, rank3);
    return surveyRankingResponse.data.output;
  },
  initSurvey(store) {
    setSurveyErrorState(store, '');
    setSurveyIsOk(store, false);
    setSurveyPostQ1(store, '');
    setSurveyPostQ2(store, '');
    setSurveyPostContentId(store, '');
  },
  surveySubmitOverlapCheck(store, { contentId }) {
    if (store.getters.getIsAuth === true) {
      surveyOverlapCheck(store, store.getters.getUID);
      return surveySubmitOverlapCheckBool(store, contentId);
    }
    return '';
  },
  setSurveyOverlapCheckCheck(store, { surveyOverlapCheckCheckCheck }) {
    setSurveyOverlapCheckCheck(store, surveyOverlapCheckCheckCheck);
  },
  setSurveyOverlapCheck(store, { uid }) {
    surveyOverlapCheck(store, uid);
  },
  async survey(store, {
    q1, q2, contentId, uid,
  }) {
    const surveyResponse = await api.survey(q1, q2, contentId, uid);
    processSurveyResponse(store, surveyResponse.data);
    if (surveyResponse.data.output === 'error') {
      setUserContentId(store, String(contentId));
    }
    return store.getters.getSurveyIsOk;
  },
  async surveyResult(store, { contentId }) {
    if (
      store.getters.getUID === '0000'
      || store.getters.getUID === '9999'
    ) {
      const surveyResultResponse = await api.surveyResult(contentId);
      return surveyResultResponse;
    }
    return false;
  },
  surveyPostData(store, { q1, q2, contentId }) {
    setSurveyPostQ1(store, q1);
    setSurveyPostQ2(store, q2);
    setSurveyPostContentId(store, contentId);
  },
  setSurveyFinishF(store, { surveyFinish }) {
    setSurveyFinish(store, surveyFinish);
  },
  /* Click Content */
  clickContent(store, { contentId }) {
    setClickContentId(store, contentId);
  },
  /* Modal */
  onClickModal(store, { onModal }) {
    setOnModal(store, onModal);
  },
  /* Click Detail Image */
  clickDetailImage(store, { detailImage, detailImgLink, detailImgTitle }) {
    setDetailImgTitle(store, detailImgTitle);
    setDetailImgLink(store, detailImgLink);
    setDetailImage(store, detailImage);
  },
  /* Notice */
  setNotice(store, {
    noticeTitle, noticeBody, noticeButton, noticeHeight, noticeDisplay,
  }) {
    setNoticeTitle(store, noticeTitle);
    setNoticeBody(store, noticeBody);
    setNoticeButton(store, noticeButton);
    setNoticeHeight(store, noticeHeight);
    setNoticeDisplay(store, noticeDisplay);
  },
};
