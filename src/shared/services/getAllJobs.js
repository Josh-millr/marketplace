import { CatchError } from '@/shared/utils/CatchError';
import { notificationFactory } from '@/shared/utils/notificationFactory';

import allJobs from '../../../jsonPlaceholder/all-jobs.json';

export const getAllJobs = async () => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(allJobs);
      }, 3000);
    });
  } catch (error) {
    const catchError = new CatchError(error);
    notificationFactory(catchError.network());
    return [];
  }
};
