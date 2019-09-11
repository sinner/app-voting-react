import { ACTIONS } from '../../Actions/Auth/logout.actions';

const initialState = {
  error: '',
  message: '',
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_LOGOUT:
      return { state: initialState };

    case ACTIONS.AUTH_LOGOUT_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default logoutReducer;
