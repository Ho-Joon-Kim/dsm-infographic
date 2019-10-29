import loginAPI from './loginAPI';
import surveyAPI from './surveyAPI';
import contentAPI from './contentAPI';

export default {
  async login(uid, pswd) {
    const loginResponse = await loginAPI.login(uid, pswd);
    return loginResponse;
  },
  async survey(q1, q2, contentId, uid) {
    const surveyResponse = await surveyAPI.survey(q1, q2, contentId, uid);
    return surveyResponse;
  },
  async surveyResult(contentId) {
    const surveyResultResponse = await surveyAPI.surveyResult(contentId);
    return surveyResultResponse;
  },
  async surveyOverlapCheck(uid) {
    const surveyOverlapCheckResponse = await surveyAPI.surveyOverlapCheck(uid);
    return surveyOverlapCheckResponse;
  },
  async surveyRanking(rank1, rank2, rank3) {
    const surveyRankingResponse = await surveyAPI.surveyRanking(rank1, rank2, rank3);
    return surveyRankingResponse;
  },
  async contentInfo(contentId) {
    const contentResponse = await contentAPI.contentInfo(contentId);
    return contentResponse;
  },
};
