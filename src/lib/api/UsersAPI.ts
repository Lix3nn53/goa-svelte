import api from './api';

const userInfo = async () => {
  const res = await api.get('/users/info');

  return res;
};

export default {
  userInfo,
};
