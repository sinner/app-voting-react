import axios, { CancelToken } from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import env from './env';

const { API_CURRENCY_EXCHANGE_URL } = env;
const AXIOS = axios.create({
  baseURL: API_CURRENCY_EXCHANGE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 100000,
});
loadProgressBar(undefined, AXIOS);

export function headers(auth = true) {
  const items = { 'Api-Key': '' };
  const accessToken = localStorage.getItem('accessToken');
  if (auth && accessToken) {
    items.Authorization = `Bearer ${accessToken}`;
  }
  return items;
}

export default AXIOS;
export { CancelToken };
