import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

export const loginUserApi = async (credentials) => {
  const path = '/login';

  try {
    const response = await HamzryAPI.post(path, credentials);
    const { data, status } = response;
    const { success, token, result } = data;

    return { success, token, status, result };
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) {
      const { data, status } = error.response;
      const { success } = data;

      return { status, success };
    }

    throw new CatchError(error).network();
  }
};
