import { showNotification } from '@mantine/notifications';

import * as feedback from '@/shared/constants/feedbackMessage';
import { NotificationCreator } from '@/shared/utils/NotificationCreator';

export const notificationFactory = (messageCode) => {
  const notification = new NotificationCreator(showNotification);

  switch (messageCode) {
    // SERVER RESPONSE CODES
    case feedback.badRequest.code:
      notification.handleBadRequest();
      break;

    case feedback.errorProcessingRequest.code:
      notification.handleServerError();
      break;

    case feedback.serverConnectionError.code:
      notification.handleServerUnreachable();
      break;

    case feedback.serverRequestError.code:
      notification.handleRequestError();
      break;

    case feedback.loginSuccessfull.code:
      notification.handleLoginSuccess();
      break;

    case feedback.loginUnSuccessfull.code:
      notification.handleLoginUnSuccess();
      break;

    default:
      return null;
  }
};
