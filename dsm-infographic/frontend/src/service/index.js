import loginAPI from './loginAPI';
import surveyAPI from './surveyAPI';

export default {
  async login(uid, pswd) {
    const loginResponse = await loginAPI.login(uid, pswd);
    return loginResponse;
  },
  async surveyAPI(q1, q2, contentId, uid) {
    const surveyResponse = await surveyAPI.survey(q1, q2, contentId, uid);
    return surveyResponse;
  },
};
