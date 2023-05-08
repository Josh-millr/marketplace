import Cookies from 'js-cookie';

export const storeSessionToken = (token) => {
  Cookies.set('sessionToken', token, {
    secure: true,
    httpOnly: false,
    expires: 30,
    sameSite: 'None',
  });

  const isTokenStored = Cookies.get('sessionToken') !== undefined;
  return isTokenStored;
};
