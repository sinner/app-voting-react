import AXIOS from '../../Config/AxiosConfig';

const Currency = {
  async getDefaultExchangeCurrencies(order = 'asc') {
    const response = await AXIOS.get(`/api/exchange/default-currencies/${order}`);
    return response.data;
  },
  async calculateExchange(currencyFromId, currencyToId, value) {
    const response = await AXIOS.get(
      // eslint-disable-next-line comma-dangle
      `/api/exchange/${currencyFromId}/${currencyToId}/calculate?value=${value}`
    );
    return response.data;
  },
};

export default Currency;
