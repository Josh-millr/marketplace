import freelancerProfileDetails from '../../../jsonPlaceholder/freelancer-profile-details.json';

// This API returns a single seller profile information

export const getFreelancerProfileApi = async () => {
  // Arg - { username }

  try {
    // NOTE: Only for Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(freelancerProfileDetails);
      }, 1000);
    });
  } catch (error) {
    // Handle error
  }
};
