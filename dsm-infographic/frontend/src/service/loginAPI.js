import axios from 'axios';

const getUserInfo = (uid, pw) => axios.post('api/login', { id: uid, pswd: pw });

export default {
  async login(uid, pswd) {
    const getUserInfoPromise = await getUserInfo(uid, pswd);
    return getUserInfoPromise;
  },
};
