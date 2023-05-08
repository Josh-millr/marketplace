import * as feedback from '@/shared/constants/feedbackMessage';

// Catches app error and returns the error code for processing/notification

export class CatchError {
  constructor(error) {
    this.error = error;
  }

  network() {
    if (this.error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return feedback.errorProcessingRequest.code;
    }

    if (this.error.request) {
      // The request was made but no response was received
      return feedback.serverConnectionError.code;
    }

    // Something happened in setting up the request that triggered an Error
    return feedback.serverRequestError.code;
  }
}
