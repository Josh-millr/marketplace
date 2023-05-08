import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

// Checks the existence of username of the database

export const checkEmailExistence = async (email) => {
  const path = '/api/checkemail';

  try {
    const response = await HamzryAPI.post(path, email);
    const { status } = response.data;

    return status;
  } catch (error) {
    // Triggered by `404` status code
    if (error?.response) return error.response.status;

    throw new CatchError(error).network();
  }
};
