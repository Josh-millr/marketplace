import service from '../../../jsonPlaceholder/service.json';

// Make API request to fetch service reviews with limit

export const getServiceReviewsApi = async (limit) => {
  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = service.reviews.comments;
        resolve(response.slice(0, limit));
      }, 3000);
    });
  } catch (error) {
    // Throw an error is the api failed to fetch
    // const catchError = new CatchError(error);
    // notificationFactory(catchError.network());
    return [];
  }
};
