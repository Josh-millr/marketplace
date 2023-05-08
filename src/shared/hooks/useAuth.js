import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { userActions } from '@/state/user/userReducer';
import { generalActions } from '@/state/general/generalReducer';

import { verifyEmail } from '../services/verifyEmail';
import { registerUser } from '../services/registerUser';
import { notificationFactory } from '../utils/notificationFactory';

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

  const login = async () => {};

  const logout = async () => {
    await Cookies.remove('sessionToken');

    await router.push('/');

    dispatch(userActions.deleteUser());
  };

  return { register, logout, login, verifyEmailAddress };
}
