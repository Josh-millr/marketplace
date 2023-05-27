import userServices from '../../../jsonPlaceholder/user-services.json';

export const getUserServicesApi = async (limit = 4) => {
  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userServices.slice(0, limit));
      }, 3000);
    });
  } catch (error) {
    // Handle Error
    return [];
  }
};
