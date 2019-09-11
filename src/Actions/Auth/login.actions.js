
import trans from '../../Translations/translation.service';
import Auth from '../../Services/Api/auth.service';
import { clearSnackBarStatus, snackBarStatus } from '../Global/snackbar.actions';

export const ACTIONS = {
  AUTH_LOGIN_CLEAR: 'auth/login/clear',
  AUTH_LOGIN_ERROR: 'auth/login/error',
  AUTH_LOGIN_DONE: 'auth/login/start',
  AUTH_LOGIN_LOGOUT: 'auth/login/logout',
};

export const login = ({ username, password }) => async dispatch => {
  try {
    const { statusCode, data } = await Auth.login(username, password);
    if (statusCode === 200) {
      dispatch({ type: ACTIONS.AUTH_LOGIN_DONE, payload: data });
      clearSnackBarStatus()(dispatch);
    }
    return data;
  } catch (error) {
    if (error.status === 401) {
      dispatch({
        type: ACTIONS.AUTH_LOGIN_ERROR,
        payload: {
          badCredentials: true,
          error: trans('login.error.badCredentials'),
          message: error.message,
        },
      });
    } else {
      dispatch({
        type: ACTIONS.AUTH_LOGIN_ERROR,
        payload: { error: error.message, badCredentials: true },
      });
    }
    snackBarStatus({
      payload: {
        title: trans('login.error.badCredentials'),
        type: 'error',
        enable: true,
      },
    })(dispatch);
    return error;
  }
};

export const clearLogin = () => (dispatch) => dispatch({ type: ACTIONS.AUTH_LOGIN_CLEAR });
