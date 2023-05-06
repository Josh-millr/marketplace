import { createSlice } from '@reduxjs/toolkit';
import * as actionCreator from './generalAction';

const initialState = {
  loading: false,
  category: [],
};

const generalReducer = createSlice({
  name: 'general',
  initialState,
  reducers: {
    startLoading: actionCreator.startLoading,
    stopLoading: actionCreator.stopLoading,
    storeCategory: actionCreator.storeCategory,
  },
});

export const generalActions = generalReducer.actions;
export default generalReducer.reducer;
