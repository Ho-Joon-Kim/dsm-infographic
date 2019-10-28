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
  [types.ADMIN_PAGE_CHECK](state, adminPageCheck) {
    state.adminPageCheck = adminPageCheck;
  },
  /* Survey */
  [types.SURVEY_ERROR_STATE](state, surveyErrorState) {
    state.surveyErrorState = surveyErrorState;
  },
  [types.SURVEY_IS_OK](state, surveyIsOk) {
    state.surveyIsOk = surveyIsOk;
  },
  [types.SURVEY_SUBMIT_COUNT](state, surveySubmitCount) {
    state.surveySubmitCount = surveySubmitCount;
  },
  [types.SURVEY_SUBMIT_LIST](state, surveySubmitList) {
    state.surveySubmitList = surveySubmitList;
  },
  [types.SURVEY_POST_Q1](state, surveyPostQ1) {
    state.surveyPostQ1 = surveyPostQ1;
  },
  [types.SURVEY_POST_Q2](state, surveyPostQ2) {
    state.surveyPostQ2 = surveyPostQ2;
  },
  [types.SURVEY_POST_CONTENTID](state, surveyPostContentId) {
    state.surveyPostContentId = surveyPostContentId;
  },
  [types.SURVEY_OVERLAP_CHECK](state, surveyOverlapCheck) {
    state.surveyOverlapCheck = surveyOverlapCheck;
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
  /* Notice */
  [types.NOTICE_TITLE](state, noticeTitle) {
    state.noticeTitle = noticeTitle;
  },
  [types.NOTICE_BODY](state, noticeBody) {
    state.noticeBody = noticeBody;
  },
  [types.NOTICE_BUTTON](state, noticeButton) {
    state.noticeButton = noticeButton;
  },
  [types.NOTICE_HEIGHT](state, noticeHeight) {
    state.noticeHeight = noticeHeight;
  },
  [types.NOTICE_DISPLAY](state, noticeDisplay) {
    state.noticeDisplay = noticeDisplay;
  },
};
