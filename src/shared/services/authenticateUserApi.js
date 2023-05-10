import { HamzryAPI } from '@/config/api/HamzryAPI';
import { serverDown } from '../constants/feedbackMessage';

// Authenticated the user session token and return the associated user datd

export const authenticateUserApi = async (sessionToken) => {
  const endpoint = '/api/verify-token';

  try {
    const headers = { 'auth-token': sessionToken };
    const { data, status } = await HamzryAPI.get(endpoint, { headers });

    return {
      isAvail: data.success,
      userData: data.result,
      statusCode: status,
    };
  } catch (error) {
    // TODO: Log error in an Performance monitoring software
    const isServerError = error.response && error.response.status >= 500;

    if (error.response && error.response.data) {
      return {
        userData: [],
        isAvail: error.response.data.success,
        statusCode: error.response.status,
      };
    }

    if (isServerError) {
      throw new Error(serverDown.code);
    } else {
      throw error;
    }
  }
};
