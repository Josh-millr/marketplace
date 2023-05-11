import { CatchError } from '@/shared/utils/CatchError';

import service from '../../../jsonPlaceholder/service.json';

export const getService = async (id) => {
  const path = `${id}`;

  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(service);
      }, 1000);
    });
  } catch (error) {
    // Throw an error is the api failed to fetch
    throw new CatchError(error).network();
  }
};
