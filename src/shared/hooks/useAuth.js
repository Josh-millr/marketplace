/* eslint-disable no-throw-literal */
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { userActions } from '@/state/user/userReducer';
import { generalActions } from '@/state/general/generalReducer';

import { loginUser } from '../services/loginUser';
import { verifyEmail } from '../services/verifyEmail';
import { registerUser } from '../services/registerUser';
import { notificationFactory } from '../utils/notificationFactory';
import { storeSessionToken } from '../utils/storeSessionToken';
import { loginUnSuccessfull, loginSuccessfull } from '../constants/feedbackMessage';

export function useAuth() {
  const router = useRouter();
  const dispatch = useDispatch();

  const register = async (credentials) => {
    try {
      dispatch(generalActions.startLoading());
      const response = await registerUser(credentials);
      return response;
    } catch (error) {
      notificationFactory(error);
    } finally {
      dispatch(generalActions.stopLoading());
    }
  };

  const verifyEmailAddress = async (code) => {
    try {
      dispatch(generalActions.startLoading());
      const response = await verifyEmail(code);
      return response;
    } catch (error) {
      notificationFactory(error);
    } finally {
      dispatch(generalActions.stopLoading());
    }
  };

  const login = async (credentials) => {
    try {
      dispatch(generalActions.startLoading());

      const response = await loginUser(credentials);
      const { success, token, status, result } = response;

      // Run if the login is successful
      if (status === 200 && success) {
        const isTokenStored = storeSessionToken(token);
        notificationFactory(loginSuccessfull.code);

        if (isTokenStored) return { success, result };
      }

      // Execute if the login is not successful
      if (status === 400 && success === false) {
        notificationFactory(loginUnSuccessfull.code);
        return { success, status };
      }
    } catch (error) {
      notificationFactory(error);
    } finally {
      dispatch(generalActions.stopLoading());
    }
  };

  const logout = async () => {
    await Cookies.remove('sessionToken');

    await router.push('/');

    dispatch(userActions.deleteUser());
  };

  return { register, logout, login, verifyEmailAddress };
}
