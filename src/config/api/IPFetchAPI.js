import axios from 'axios';

export const IPFetchAPI = axios.create({
  baseURL: 'https://api.ipify.org',
});
