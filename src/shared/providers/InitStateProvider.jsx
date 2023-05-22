/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '@/state/user/userReducer';
import { generalActions } from '@/state/general/generalReducer';
import { getCategoriesApi } from '@/shared/services/getCategoriesApi';

// TODO: Fix the error handling for category fetching

export const InitStateProvider = memo(({ userData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.length !== 0) {
      dispatch(userActions.setUser(userData));
    }
  }, [userData.length]);

  useEffect(() => {
    if (userData.length !== 0) {
      const getCategories = async () => {
        try {
          const categories = await getCategoriesApi();
          dispatch(generalActions.storeCategory(categories));
        } catch (error) {
          throw new Error('Internal Server Error', 500);
        }
      };

      getCategories();
    }
  }, []);
  return <></>;
});
