export const ACTIONS = {
  AUTH_USER_UPDATE_INFO: 'auth/user/update-info',
};

export const getAuthDataFromStorage = () => dispatch => {
  const accessToken = localStorage.getItem('accessToken');
  const userStr = localStorage.getItem('user');
  if (accessToken && userStr) {
    const user = JSON.parse(userStr);
    dispatch({
      type: ACTIONS.AUTH_USER_UPDATE_INFO,
      payload: { accessToken, user },
    });
  }
};
