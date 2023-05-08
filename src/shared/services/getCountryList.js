import { ServerApi } from '@/config/api/ServerApi';

export const getCountryList = async () => {
  const path = '/countriesLight';

  try {
    const response = await ServerApi.get(path);
    return response.data;
  } catch (error) {
    // Handle network error
  }
};
