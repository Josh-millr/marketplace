import * as feedback from '@/shared/constants/feedbackMessage';

// NotificationCreator
export class NotificationCreator {
  constructor(showNotification) {
    this.showNotification = showNotification;
  }

  // SERVER RESPONSE NOTIFICATIONS
  handleBadRequest() {
    this.showNotification({
      title: feedback.badRequest.statement,
      message: feedback.badRequest.resolution,
      color: 'red',
    });
  }

  handleServerError() {
    this.showNotification({
      title: feedback.errorProcessingRequest.statement,
      message: feedback.errorProcessingRequest.resolution,
      color: 'red',
    });
  }

  handleServerUnreachable() {
    this.showNotification({
      title: feedback.serverConnectionError.statement,
      message: feedback.serverConnectionError.resolution,
      color: 'red',
    });
  }

  handleRequestError() {
    this.showNotification({
      title: feedback.serverRequestError.statement,
      message: feedback.serverRequestError.resolution,
      color: 'red',
    });
  }

  handleLoginSuccess() {
    this.showNotification({
      title: feedback.loginSuccessfull.statement,
      message: feedback.loginSuccessfull.resolution,
      color: 'green',
    });
  }

  handleLoginUnSuccess() {
    this.showNotification({
      title: feedback.loginUnSuccessfull.statement,
      message: feedback.loginUnSuccessfull.resolution,
      color: 'red',
    });
  }
}
