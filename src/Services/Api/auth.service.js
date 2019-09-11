import AXIOS from '../../Config/AxiosConfig';

const Auth = {
  async login(username, password) {
    const response = await AXIOS.post('/api/login', {
      email: username,
      password,
    });
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

export default Auth;
