// SIGNUP ERRORS
export const firstNameEmpty = {
  code: 'FISTNAME_EMPTY',
  statement: 'Firstname input is empty.',
  resolution: 'First name cannot be empty, add a first name',
};

export const lastNameEmpty = {
  code: 'LASTNAME_EMPTY',
  statement: 'Lastname input is empty.',
  resolution: 'Last name cannot be empty add a last name',
};

export const emailEmpty = {
  code: 'USERNAME_EMPTY',
  statement: 'Email input is empty.',
  resolution: 'Email cannot be empty, add your email address',
};

export const emailFormatIncorrect = {
  code: 'EMAIL_FORMAT_INCORRECT',
  statement: 'Incorrect email format.',
  resolution: `Invalid email format. Please enter a valid email address and 
  cannot be left empty`,
};

export const emailTaken = {
  code: 'EMAIL_TAKEN',
  statement: 'Email Address already in use.',
  resolution: `The email address you entered is already in use. Please try a 
  different email addreess`,
};

export const emailNotTaken = {
  code: 'EMAIL_NOT_TAKEN',
  statement: 'Email Address not registered.',
  resolution: 'Email not found. Create an account or check your email.',
};

export const userNameEmpty = {
  code: 'USERNAME_EMPTY',
  statement: 'Username input is empty.',
  resolution: 'Username cannot be empty, add a username',
};

export const userNameTaken = {
  code: 'USERNAME_TAKEN',
  statement: 'Username already taken.',
  resolution:
    'The username you entered is already taken, please try a different one',
};

export const userNameFormatIncorrect = {
  code: 'USERNAME_FORMAT_INCORRECT',
  statement: 'Incorrect username format. Use a valid format.',
  resolution: `Use 3 to 15 characters, letters, numbers, and underscores only,
   eg. "ola_mike`,
};

export const passwordEmpty = {
  code: 'PASSWORD_EMPTY',
  statement: 'Password input is empty.',
  resolution: 'Password cannot be empty, add a password',
};

export const passwordFormatIncorrect = {
  code: 'PASSWORD_FORMAT_INCORRECT',
  statement: 'Incorrect password format. Use a valid format.',
  resolution: `Password must have at least 8 characters, a letter, a number and
  a special character`,
};

export const genderEmpty = {
  code: 'GENDER_EMPTY',
  statement: 'Gender input is empty.',
  resolution: 'Choose a gender',
};

export const countryEmpty = {
  code: 'COUNTRY_EMPTY',
  statement: 'Country input is empty.',
  resolution: 'Choose a country',
};

export const accountTypeEmpty = {
  code: 'ACCOUNTY_TYPE_EMPTY',
  statement: 'Accounty Type input is empty.',
  resolution: 'Choose an account type',
};

// EMAIL LOGIN ERRORS
export const emailFailedLogin = {
  code: 'USERNAME_FAILED_LOGIN',
  statement: 'Email Address might be incorrect.',
  resolution: `Could not login, the email address might be incorrect,
  please try again`,
};

// PASSWORD LOGIN ERRORS
export const passwordFailedLogin = {
  code: 'PASSWORD_FAILED_LOGIN',
  statement: 'Password might be incorrect.',
  resolution: 'Could not login, password might be incorrect, please try again',
};

// LOGIN SUCCESSFULL
export const loginSuccessfull = {
  code: 'LOGIN_SUCCESSFULL',
  statement: 'Login Successful',
  resolution: `You are now logged in, you will be redirected to the 
  marketplace`,
};

// LOGIN UNSUCCESSFULL
export const loginUnSuccessfull = {
  code: 'LOGIN_UNSUCCESSFULL',
  statement: 'Login Unsuccessful',
  resolution: `Login was unsuccessful, Username or password is incorrect.
  Please try again`,
};

// INCORRECT EMAIL VERIFICAITON CODE
export const emailVerificationCodeIncorrect = {
  code: 'EMAIL_VERIFICATION_CODE_INCORRECT',
  statement: 'Incorrect email verification code.',
  resolution: 'Incorrect email verification code, Please try again',
};

// SEARCH ERRORS
export const noSearchQuery = {
  code: 'NO_SEARCH_QUERY',
  statement: 'No search query',
  resolution: 'Search input is empty, start typing to search',
};

// PROCESSING RESPONSE ERRORS ---- Deprecate
export const errorProcessingRequest = {
  code: 'PROCESSING_RESPONSE',
  statement: 'Error Processing Request',
  resolution: `We're sorry, we couldn't process your request at this time.
  Please try again later.`,
};

// SERVER CONNECTION ERRORS
export const serverConnectionError = {
  code: 'SERVER_CONNECTION',
  statement: 'Server Connection Error',
  resolution: `Something went wrong while processing your request.
  Please check your internet connection and try again later.`,
};

// SERVER REQUEST ERRORS
export const serverRequestError = {
  code: 'SERVER_REQUEST',
  statement: 'Request Error',
  resolution: `The server is currently unreachable. Please check your
  network connection and try again.`,
};

// *****************************************************************************

// PAGE NOT FOUND
export const pageNotFound = {
  code: 'PAGE_UNAVAILABLE',
  statement: 'Oops! Page Not Found',
  resolution: `Oops! The page you're looking for can't be found. Double-check 
  the URL or try navigating back to the homepage.`,
};

// BAD REQUEST
export const badRequest = {
  code: 'BAD_REQUEST',
  statement: 'Error Processing Request',
  resolution: 'Your request could not be processed. please try again.',
};

// SERVER DOWN OR UNAVAILABLE
export const serverDown = {
  code: 'SERVER_DOWN',
  statement: 'Oops! Something went wrong.',
  resolution: `Sorry, we're experiencing some technical difficulties right now.
   Our team has been notified and we're working to fix the issue as soon as 
   possible. Please try again later`,
};
