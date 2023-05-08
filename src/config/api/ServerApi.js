import axios from 'axios';

export const ServerApi = axios.create({
  /**
   * TODO: Switch to using enviromental variable for consuming sever URL
   * @see https://vercel.com/docs/concepts/projects/environment-variables#
   */
  baseURL: '/api',
  timeout: 5000,
});
