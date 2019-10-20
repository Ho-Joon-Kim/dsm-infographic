import loginAPI from './loginAPI';

export default {
  async login(uid, pswd) {
    const loginResponse = await loginAPI.login(uid, pswd);
    return loginResponse;
  },
};
