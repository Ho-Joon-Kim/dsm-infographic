import axios from 'axios';

const postSurveyInfo = (q1, q2, contentId, uid) => axios.post('api/survey', {
  q1,
  q2,
  infoNum: contentId,
  uid,
});

export default {
  async survey(q1, q2, contentId, uid) {
    const postSurveyInfoPromise = await postSurveyInfo(q1, q2, contentId, uid);
    return postSurveyInfoPromise;
  },
};
