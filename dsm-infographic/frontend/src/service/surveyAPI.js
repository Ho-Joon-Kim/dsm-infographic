import axios from 'axios';

const getSurveyInfo = (q1, q2, contentId, uid) => axios.post('api/survey', {
  q1,
  q2,
  infoNum: contentId,
  id: uid,
});

const getSurveyResult = contentId => axios.get(`api/survey/admin?imgid=${contentId}`);

const getSurveyOverlapCheck = uid => axios.post('api/survey/check', {
  id: uid,
});

const getSurveyRanking = (rank1, rank2, rank3) => axios.post('api/survey/second', {
  fst: rank1,
  scd: rank2,
  trd: rank3,
});

export default {
  async survey(q1, q2, contentId, uid) {
    const getSurveyInfoPromise = await getSurveyInfo(q1, q2, contentId, uid);
    return getSurveyInfoPromise;
  },
  async surveyResult(contentId) {
    const getSurveyResultPromise = await getSurveyResult(contentId);
    return getSurveyResultPromise;
  },
  async surveyOverlapCheck(uid) {
    const getSurveyOverlapCheckPromise = await getSurveyOverlapCheck(uid);
    return getSurveyOverlapCheckPromise;
  },
  async surveyRanking(rank1, rank2, rank3) {
    const getSurveyRankingPromise = await getSurveyRanking(rank1, rank2, rank3);
    return getSurveyRankingPromise;
  },
};
