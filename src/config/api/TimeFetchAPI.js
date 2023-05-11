import axios from 'axios';

// http://worldtimeapi.org/pages/examples

export const TimeFetchAPI = axios.create({
  baseURL: 'http://worldtimeapi.org/api',
});
