/* eslint-disable operator-linebreak */
import * as feedback from '@/shared/constants/feedbackMessage';

// Performs server request to Checks the validity of auth credentials

export class ValidateForm {
  constructor() {
    const validateUsernameFormat = (username) => {
      const userNameRegExPattern = /^(?!_)(?!.*?_$)[a-zA-Z0-9_]{3,15}$/;
      return userNameRegExPattern.test(username);
    };

    const validateEmailFormat = (email) => {
      const emailRegExPattern =
        /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
      return emailRegExPattern.test(email);
    };

    const validatePasswordFormat = (password) => {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      return passwordRegex.test(password);
    };

    this.validateEmailFormat = (value) => validateEmailFormat(value);
    this.validateUsernameFormat = (value) => validateUsernameFormat(value);
    this.validatePasswordFormat = (value) => validatePasswordFormat(value);
  }

  username(value) {
    const isUsernameEmpty = value.length === 0;
    const isUsernameFormatValid = this.validateUsernameFormat(value);

    if (isUsernameEmpty) {
      return feedback.userNameEmpty.resolution;
    }
    if (isUsernameFormatValid === false) {
      return feedback.userNameFormatIncorrect.resolution;
    }

    return null;
  }

  password(value) {
    const isPasswordEmpty = value.length === 0;
    const isPasswordFormatValid = this.validatePasswordFormat(value);

    if (isPasswordEmpty) {
      return feedback.passwordEmpty.resolution;
    }
    if (isPasswordFormatValid === false) {
      return feedback.passwordFormatIncorrect.resolution;
    }

    return null;
  }

  email(value) {
    const isEmailEmpty = value.length === 0;
    const isEmailFormatValid = this.validateEmailFormat(value);

    if (isEmailEmpty) {
      return feedback.emailEmpty.resolution;
    }
    if (isEmailFormatValid === false) {
      return feedback.emailFormatIncorrect.resolution;
    }
  }
}
