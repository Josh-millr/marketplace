import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

export const verifyEmailApi = async (code) => {
  const path = '/api/verify-email';

  try {
    const response = await HamzryAPI.post(path, code);
    const { success } = response.data;

    return success;
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) return error.response.data.success;

    throw new CatchError(error).network();
  }
};
