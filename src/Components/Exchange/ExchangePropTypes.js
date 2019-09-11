import PropTypes from 'prop-types';

const ExchangePropTypes = {
  currencyFrom: PropTypes.object,
  currencyTo: PropTypes.object,
  conversionIndex: PropTypes.number,
  result: PropTypes.string,
  getDefaultExchangeCurrencies: PropTypes.func,
  calculateExchange: PropTypes.func,
  clearExchangeForm: PropTypes.func,
};

export default ExchangePropTypes;
