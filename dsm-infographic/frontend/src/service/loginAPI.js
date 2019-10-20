import axios from 'axios';

/*
.then((response) => {
    return {
      uname : response.data.username,
      is_auth : response.data.loginchk
    };
  })
*/

const getUserInfo = (uid, pw) => axios.post('api/login', { id: uid, pswd: pw });

export default {
  async login(uid, pswd) {
    const getUserInfoPromise = await getUserInfo(uid, pswd);
    return getUserInfoPromise;
  },
};
