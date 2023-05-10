import { HamzryAPI } from '@/config/api/HamzryAPI';

// Retrieves the list of categories based on the user rolw

export const getCategories = async () => {
  // role
  // TODO: Replace to project specific endpoint
  const path = '/api/categories';

  try {
    const response = await HamzryAPI.get(path);
    const { categories } = response.data;

    return categories;
  } catch (error) {
    return new Error('Internal Server Error', 502);
  }
};
