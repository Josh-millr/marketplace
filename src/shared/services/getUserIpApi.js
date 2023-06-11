import { IPFetchAPI } from '@/config/api/IPFetchAPI';
import { CatchError } from '@/shared/utils/CatchError';

export const getUserIpApi = async () => {
  const query = '?format=json';

  try {
    const response = await IPFetchAPI.get(query);
    const { ip } = response.data;

    return ip;
  } catch (error) {
    return new CatchError(error).network();
  }
};
