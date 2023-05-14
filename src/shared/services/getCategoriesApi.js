// import { HamzryAPI } from '@/config/api/HamzryAPI';
import { serviceCategories } from '../../../jsonPlaceholder/service-categories';
// Retrieves the list of categories based on the user rolw

// export const getCategoriesApi = async () => {
//   // role
//   // TODO: Replace to project specific endpoint
//   const path = '/api/categories';

//   try {
//     const response = await HamzryAPI.get(path);
//     const { categories } = response.data;

//     return categories;
//   } catch (error) {
//     return new Error('Internal Server Error', 502);
//   }
// };

export const getCategoriesApi = async () => {
  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(serviceCategories);
      }, 1000);
    });
  } catch (error) {
    return new Error('Internal Server Error', 502);
  }
};
