import axios from 'axios';
import Cookies from 'js-cookie';

const sessionToken = Cookies.get('sessionToken');

export const HamzryAPI = axios.create({
  /**
   * TODO: Switch to using enviromental variable for consuming sever URL
   * @see https://vercel.com/docs/concepts/projects/environment-variables#
   */
  baseURL: 'https://hamzry.onrender.com',
  timeout: 5000,
  headers: {
    common: {
      'auth-token': sessionToken || '',
    },
  },
});
