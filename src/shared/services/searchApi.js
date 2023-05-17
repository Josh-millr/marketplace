import { HamzryAPI } from '@/config/api/HamzryAPI';
import { CatchError } from '@/shared/utils/CatchError';

import projectSearch from '../../../jsonPlaceholder/project-search.json';
import freelancerSearch from '../../../jsonPlaceholder/freelancer-search.json';

export const searchApiDemo = async (arg) => {
  const { criteria } = arg;
  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        if (criteria === 'category') resolve(projectSearch);
        if (criteria === 'freelancer') resolve(freelancerSearch);
      }, 3000);
    });
  } catch (error) {
    // Throw an error is the api failed to fetch
    throw new CatchError(error).network();
  }
};

export const searchApi = async (arg) => {
  const { criteria, query, batchSize = 10, page = 2 } = arg;

  let endpoint;
  const returnValues = { success: null, data: [] };

  if (criteria === 'project' || criteria === 'service') {
    endpoint = `/search/${criteria}/?${query}&page=${page}&perPage=${batchSize}`;
  } else if (criteria === 'freelancer') {
    endpoint = `/search/${criteria}/?name=${query}&page=${page}&perPage=${batchSize}`;
  } else {
    throw new Error('Invalid search criteria');
  }

  try {
    const response = await HamzryAPI.get(endpoint);
    returnValues.success = response.data.sucess;
    returnValues.data = response.data.result;
    return returnValues;
  } catch (error) {
    if (error?.response !== 'undefined') {
      returnValues.success = error.response.data.sucess;
      return returnValues;
    }

    return new CatchError(error);
  }
};
