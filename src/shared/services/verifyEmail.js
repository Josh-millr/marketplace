import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

export const verifyEmail = async (code) => {
  const path = '/api/verify-email';

  try {
    const response = await HamzryAPI.post(path, code);
    const { success } = response.data;

    return success;
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) return error.response.success;

    throw new CatchError(error).network();
  }
};
