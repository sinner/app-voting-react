import { ACTIONS } from '../../Actions/Exchange/currency.actions';

const initialState = {
  valueToExchange: '',
  currencyFrom: {},
  currencyTo: {},
  conversionIndex: 1,
  result: '',
  message: '',
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.EXCH_CLEAR_FORM:
      return { ...state, result: '', valueToExchange: '' };

    case ACTIONS.EXCH_GET_CURRENCIES:
      return { ...state, ...action.payload };

    case ACTIONS.EXCH_TOGGLE_CURRENCIES:
      return { ...state, ...action.payload };

    case ACTIONS.EXCH_CALCULATE_EXCHANGE: {
      return { ...state, ...action.payload };
    }
    case ACTIONS.EXCH_CALCULATE_EXCHANGE_ERROR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default currencyReducer;
