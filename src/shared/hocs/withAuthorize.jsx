import { authenticateUserApi } from '@/shared/services/authenticateUserApi';

import { getSessionTokenOnServer } from '../utils/getSessionTokenOnServer';

// Adds Authorization to protected pages
// TODO: Add role check for client and freelancer route

export const withAuthorize = (dispatchOtherAction) => async (context) => {
  const homepageRedirect = { destination: '/' };

  const sessionToken = await getSessionTokenOnServer(context);

  try {
    const response = await authenticateUserApi(sessionToken);
    const { isAvail, statusCode } = response;

    if (statusCode === 200 && isAvail) {
      const gsspData = await dispatchOtherAction(context);
      return { props: { ...gsspData.props } };
    }

    return { redirect: homepageRedirect };
  } catch (error) {
    // Return empty props due to server unavailability or internal error
    throw new Error(error.message, 500);
  }
};
