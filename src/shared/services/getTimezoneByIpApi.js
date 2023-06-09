import { TimeAPI } from '@/config/api/TimeAPI';
import { CatchError } from '@/shared/utils/CatchError';

export const getTimezoneByIpApi = async (ip) => {
  const query = `${ip}?fields=timezone`;

  try {
    const response = await TimeAPI.get(query);
    const timezone = response.data.id;

    return timezone;
  } catch (error) {
    return new CatchError(error).network();
  }
};
