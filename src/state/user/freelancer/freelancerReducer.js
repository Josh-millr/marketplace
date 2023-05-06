import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const freelancerReducer = createSlice({
  name: 'freelancer',
  initialState,
  reducers: {},
  extraReducers() {}, // `builder` goes in parameter
});

export const freelancerActions = freelancerReducer.actions;
export default freelancerReducer.reducer;
