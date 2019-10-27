import axios from 'axios';

const postSurveyInfo = (q1, q2, contentId, uid) => axios.post('api/survey', {
  q1,
  q2,
  infoNum: contentId,
  id: uid,
});

const getSurveyResult = contentId => axios.get(`api/survey/admin?imgid=${contentId}`);

export default {
  async survey(q1, q2, contentId, uid) {
    const postSurveyInfoPromise = await postSurveyInfo(q1, q2, contentId, uid);
    return postSurveyInfoPromise;
  },
  async getSurveyResult(contentId) {
    const getSurveyResultPromise = await getSurveyResult(contentId);
    return getSurveyResultPromise;
  },
};
