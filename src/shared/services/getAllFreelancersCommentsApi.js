import FreelancersComments from '../../../jsonPlaceholder/FreelancersComments.json';

export const getAllFreelancersCommentsApi = async (limit) => {
  // Pass in `userId` as argument

  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = FreelancersComments;
        resolve(response.slice(0, limit));
      }, 3000);
    });
  } catch (error) {
    // Throw an error is the api failed to fetch
    return [];
  }
};
