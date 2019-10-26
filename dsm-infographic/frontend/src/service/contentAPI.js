import axios from 'axios';

const getContentInfo = contentId => axios.get(`api/info/desc?imgid=${contentId}`);

export default {
  async contentInfo(contentId) {
    const getContentInfoPromise = await getContentInfo(contentId);
    return getContentInfoPromise;
  },
};
