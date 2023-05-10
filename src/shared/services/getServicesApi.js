import { CatchError } from '@/shared/utils/CatchError';
import { notificationFactory } from '@/shared/utils/notificationFactory';

import services from '../../../jsonPlaceholder/services.json';

// Make API request to fetch services with limit

/**
 *
 * TODO:
 * - Implement fetch service with limit
 * - Set the right api endpoint for service fetching
 *
 * */

export const getServicesApi = async (limit) => {
  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = services;
        resolve(response.slice(0, limit));
      }, 3000);
    });
  } catch (error) {
    // Throw an error is the api failed to fetch
    const catchError = new CatchError(error);
    notificationFactory(catchError.network());
    return [];
  }
};
