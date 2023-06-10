import { TimeAPI } from '@/config/api/TimeAPI';
import { CatchError } from '@/utils/CatchError';

export const getTimezoneByIpApi = async (ip) => {
  const query = `${ip}?timezone=&fields=timezone`; // ?fields=timezone

  try {
    const response = await TimeAPI.get(query);
    const timezone = response.data.id;

    return timezone;
  } catch (error) {
    return new CatchError(error).network();
  }
};
