import { ACTIONS as LOGIN_ACTIONS } from '../../Actions/Auth/login.actions';
import { ACTIONS as LOGOUT_ACTIONS } from '../../Actions/Auth/logout.actions';
import { ACTIONS as USER_ACTIONS } from '../../Actions/Auth/user.actions';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.AUTH_LOGIN_DONE: {
      const { user, accessToken } = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', accessToken);
      return { ...state, ...action.payload.data, isAuthenticated: true };
    }
    case USER_ACTIONS.AUTH_USER_UPDATE_INFO: {
      const { user, accessToken } = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', accessToken);
      if (accessToken) {
        return { ...state, ...action.payload, isAuthenticated: true };
      }
      return { ...state, ...action.payload };
    }
    case LOGOUT_ACTIONS.AUTH_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
