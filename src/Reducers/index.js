import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import loginReducer from './Auth/login.reducer';
import logoutReducer from './Auth/logout.reducer';
import userReducer from './Auth/user.reducer';
import navigationReducer from './Global/navigation.reducer';
import snackbarReducer from './Global/snackbar.reducer';
import currencyReducer from './Exchange/currency.reducer';

const rootReducer = combineReducers({
  currencyReducer,
  form,
  loginReducer,
  logoutReducer,
  navigationReducer,
  snackbarReducer,
  userReducer,
});

export default rootReducer;
