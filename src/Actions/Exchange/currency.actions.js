import Currency from '../../Services/Api/currency.service';

export const ACTIONS = {
  EXCH_CLEAR_FORM: 'exch/clear-form',
  EXCH_GET_CURRENCIES: 'exch/get-currencies',
  EXCH_GET_CURRENCIES_ERROR: 'exch/get-currencies/error',
  EXCH_TOGGLE_CURRENCIES: 'exch/toggle-currencies',
  EXCH_CALCULATE_EXCHANGE: 'auth/calculate-exchange',
  EXCH_CALCULATE_EXCHANGE_ERROR: 'auth/calculate-exchange/error',
};

/**
 * Get Default Exchange Currencies USD > EUR
 *
 * @param {string} order [asc|desc]
 */
export const getDefaultExchangeCurrencies = (order = 'asc') => async dispatch => {
  try {
    const { statusCode, data } = await Currency.getDefaultExchangeCurrencies(order);
    if (statusCode === 200) {
      dispatch({ type: ACTIONS.EXCH_GET_CURRENCIES, payload: data });
    }
  } catch (error) {
    dispatch({ type: ACTIONS.EXCH_GET_CURRENCIES_ERROR, payload: { error: error.message } });
  }
};

/**
 * Toggle Exchange Currencies
 *
 * @param {object} lastCurrencyFrom
 * @param {object} lastCurrencyTo
 */
export const toggleExchangeCurrencies = (lastCurrencyFrom, lastCurrencyTo) => {
  const currencyFrom = lastCurrencyTo;
  const currencyTo = lastCurrencyFrom;
  return {
    type: ACTIONS.EXCH_TOGGLE_CURRENCIES,
    payload: {
      currencyFrom,
      currencyTo,
    },
  };
};

export const clearExchangeForm = () => ({ type: ACTIONS.EXCH_CLEAR_FORM });

/**
 * Calculate Exchange
 *
 * @param {json} object { currencyFromId, currencyToId, value }
 */
export const calculateExchange = ({ currencyFromId, currencyToId, value }) => async dispatch => {
  try {
    const { statusCode, data } = await Currency.calculateExchange(
      currencyFromId,
      currencyToId,
      // eslint-disable-next-line comma-dangle
      value
    );
    if (statusCode === 200) {
      dispatch({ type: ACTIONS.EXCH_CALCULATE_EXCHANGE, payload: data });
    }
  } catch (error) {
    dispatch({ type: ACTIONS.EXCH_CALCULATE_EXCHANGE_ERROR, payload: { error: error.message } });
  }
};
