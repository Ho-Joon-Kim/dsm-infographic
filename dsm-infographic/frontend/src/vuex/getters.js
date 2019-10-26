export default {
  /* Login */
  getUID: state => state.uid,
  getUName: state => state.uname,
  getLoginErrorState: state => state.loginErrorState,
  getIsAuth: state => state.isAuth,
  /* Survey */
  getSurveyErrorState: state => state.surveyErrorState,
  getSurveyIsOk: state => state.surveyIsOk,
  /* Click Infographic */
  getClickContendId: state => state.clickContentId,
  /* Click Detail Image */
  getDetailImage: state => state.detailImage,
  getDetailImgLink: state => state.detailImgLink,
  getDetailImgTitle: state => state.detailImgTitle,
  /* Modal */
  getOnModal: state => state.onModal,
};
