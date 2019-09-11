import snackBarStatus, { clearSnackBarStatus } from '../Global/snackbar.actions';
import {
  ACTIONS as navigationActions,
} from '../Global/navigation.actions';

export const ACTIONS = {
  AUTH_LOGOUT: 'auth/logout',
  AUTH_LOGOUT_ERROR: 'auth/logout/error',
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: ACTIONS.AUTH_LOGOUT });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.clear();
    clearSnackBarStatus()(dispatch);
    dispatch({ type: navigationActions.NAV_REDIRECT, payload: '/' });
    return;
  } catch (err) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.clear();
    if (err.message) {
      dispatch({
        type: ACTIONS.AUTH_LOGOUT_ERROR,
        payload: { error: err.message },
      });
    } else {
      dispatch({ type: ACTIONS.AUTH_LOGOUT_ERROR, payload: { error: err.message } });
    }
    dispatch({ type: navigationActions.NAV_REDIRECT, payload: '/' });
  }
};
