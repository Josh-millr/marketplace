import axios from 'axios';

// https://ipwhois.io/documentation

export const TimeAPI = axios.create({
  baseURL: 'http://ipwho.is/',
});
