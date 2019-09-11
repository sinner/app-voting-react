import { ACTIONS } from '../../Actions/Global/snackbar.actions';

const initialState = {
  enable: false,
  title: 'snackbar',
  type: 'error',
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SNACKBAR_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.SNACKBAR_CLEAR:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
