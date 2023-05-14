import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

export const registerUserApi = async (credentials) => {
  const path = '/api/signup';

  try {
    const response = await HamzryAPI.post(path, credentials);
    const { success } = response.data;

    return success;
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) return error.response.success;

    throw new CatchError(error).network();
  }
};
