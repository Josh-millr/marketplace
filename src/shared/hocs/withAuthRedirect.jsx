import Router from 'next/router';

import { ROLES } from '@/shared/constants/roles';
import { authenticateUserApi } from '@/shared/services/authenticateUserApi';
import { getSessionTokenOnServer } from '@/shared/utils/getSessionTokenOnServer';

export const withAuthRedirect = (dispatchOtherAction) => async (context) => {
  const sessionToken = await getSessionTokenOnServer(context);

  const clientRedirect = { destination: '/client' };
  const freelancerRedirect = { destination: '/freelancer' };

  try {
    const response = await authenticateUserApi(sessionToken);
    const { isAvail, statusCode, userData } = response;

    if (statusCode === 200 && isAvail) {
      const userRole = userData.role;

      if (typeof window !== 'object') {
        if (userRole === ROLES.BUYER) return { redirect: clientRedirect };
        if (userRole === ROLES.SELLER) return { redirect: freelancerRedirect };
      }

      if (userRole === ROLES.BUYER) {
        await Router.push(clientRedirect.destination);
      }
      if (userRole === ROLES.SELLER) {
        await Router.push(freelancerRedirect.destination);
      }
    }

    if (statusCode >= 400 && isAvail === false) {
      const gsspData = await dispatchOtherAction(context);
      return { props: { ...gsspData.props } };
    }
  } catch (error) {
    // Throw an error to server unavailability or internal error
    throw new Error(error, 500);
  }
};
