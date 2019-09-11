import { ACTIONS } from '../../Actions/Auth/login.actions';

const initialState = {
  username: '',
  password: '',
  error: '',
  message: '',
  badCredentials: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_LOGIN_UPDATE_INFO:
      return { ...state, ...action.payload };

    case ACTIONS.AUTH_LOGIN_CLEAR:
      return { ...state, ...initialState };

    case ACTIONS.AUTH_LOGIN_DONE:
      return { ...state, ...action.payload.data, badCredentials: false };

    case ACTIONS.AUTH_LOGIN_ERROR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default loginReducer;
