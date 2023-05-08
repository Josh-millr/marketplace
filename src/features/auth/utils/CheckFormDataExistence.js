import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

export class CheckFormDataExistence {
  async username(value) {
    const route = '/api/check-username';
    const usernameData = { username: value };

    try {
      const response = await HamzryAPI.post(route, usernameData);
      const { status } = response.data;

      return status;
    } catch (error) {
      const catchError = new CatchError(error);
      return catchError.network();
    }
  }

  async email(value) {
    try {
      const route = '/api/checkemail';
      const email = value;

      const response = await HamzryAPI.post(route, email);
      const { status } = response.data;

      return status;
    } catch (error) {
      const catchError = new CatchError(error);
      return catchError.network();
    }
  }
}
