export default {
  /* Login */
  getUID: state => state.uid,
  getUName: state => state.uname,
  getLoginErrorState: state => state.loginErrorState,
  getIsAuth: state => state.isAuth,
  getLoginHeight: state => state.loginHeight,
  getLoginDisplay: state => state.loginDisplay,
  getAdminCheck: state => state.adminCheck,
  getAdminPageCheck: state => state.adminPageCheck,
  /* Survey */
  getSurveyErrorState: state => state.surveyErrorState,
  getSurveyIsOk: state => state.surveyIsOk,
  getSurveySubmitList: state => state.surveySubmitList,
  getSurveySubmitCount: state => state.surveySubmitCount,
  getSurveyPostQ1: state => state.surveyPostQ1,
  getSurveyPostQ2: state => state.surveyPostQ2,
  getSurveyPostContentId: state => state.surveyPostContentId,
  getSurveyOverlapCheck: state => state.surveyOverlapCheck,
  getSurveyLast: state => state.surveyLast,
  getSurveyFinish: state => state.surveyFinish,
  getUserContentId: state => state.userContentId,
  /* Click Infographic */
  getClickContendId: state => state.clickContentId,
  /* Click Detail Image */
  getDetailImage: state => state.detailImage,
  getDetailImgLink: state => state.detailImgLink,
  getDetailImgTitle: state => state.detailImgTitle,
  /* Modal */
  getOnModal: state => state.onModal,
  /* Notice */
  getNoticeTitle: state => state.noticeTitle,
  getNoticeBody: state => state.noticeBody,
  getNoticeButton: state => state.noticeButton,
  getNoticeHeight: state => state.noticeHeight,
  getNoticeDisplay: state => state.noticeDisplay,
};
