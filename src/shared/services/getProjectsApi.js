import { CatchError } from '@/shared/utils/CatchError';
import { notificationFactory } from '@/shared/utils/notificationFactory';

import projects from '../../../jsonPlaceholder/projects.json';

// Make API request to fetch projects with limit

export const getProjectsApi = async (limit) => {
  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = projects;
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
