export const ACTIONS = {
  SNACKBAR_STATUS: 'snackbar/status',
  SNACKBAR_CLEAR: 'snackbar/clear',
};

export const snackBarStatus = value => dispatch => {
  dispatch({ type: ACTIONS.SNACKBAR_STATUS, ...value });
};

export const clearSnackBarStatus = () => dispatch => {
  dispatch({ type: ACTIONS.SNACKBAR_CLEAR });
};

export default snackBarStatus;
