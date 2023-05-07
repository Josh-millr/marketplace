import axios from 'axios';

export const HamzryCMS = axios.create({
  /**
   * TODO: Switch to using enviromental variable for consuming sever URL
   * @see https://vercel.com/docs/concepts/projects/environment-variables#
   */
  // TODO: Replace with original hamzry csm API
  baseURL: 'https://your-strapi-cms-url.com/images',
  timeout: 5000,
});
