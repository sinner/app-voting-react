import { ACTIONS } from '../../Actions/Global/navigation.actions';

const initialState = {
  redirect: false,
  goToURL: '',
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.NAV_REDIRECT:
      return { ...state, redirect: true, goToURL: action.payload };

    case ACTIONS.NAV_STOP:
      return { ...state, redirect: action.payload.flag, goToURL: action.payload.url };

    default:
      return state;
  }
};

export default navigationReducer;
