const getLocalAccessToken = (): string | null => {
  return window.localStorage.getItem('accessToken') || window.sessionStorage.getItem('accessToken');
};

const getLocalRefreshToken = (): string | null => {
  return (
    window.localStorage.getItem('refreshToken') || window.sessionStorage.getItem('refreshToken')
  );
};

const setLocalAccessToken = (accessToken: string, save: boolean) => {
  if (save) {
    window.localStorage.setItem('accessToken', accessToken);
  } else {
    window.sessionStorage.setItem('accessToken', accessToken);
  }
};

const setLocalRefreshToken = (refreshToken: string, save: boolean) => {
  if (save) {
    window.localStorage.setItem('refreshToken', refreshToken);
  } else {
    window.sessionStorage.setItem('refreshToken', refreshToken);
  }
};

const removeLocalAccessToken = () => {
  window.localStorage.removeItem('accessToken');
  window.sessionStorage.removeItem('accessToken');
};

const removeLocalRefreshToken = () => {
  window.localStorage.removeItem('refreshToken');
  window.sessionStorage.removeItem('refreshToken');
};

const isSaved = (): boolean => {
  return window.localStorage.getItem('refreshToken') != null;
};

export default {
  getLocalAccessToken,
  getLocalRefreshToken,
  setLocalAccessToken,
  setLocalRefreshToken,
  removeLocalAccessToken,
  removeLocalRefreshToken,
  isSaved,
};
