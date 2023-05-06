import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const clientReducer = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers() {},
});

export const clientActions = clientReducer.actions;
export default clientReducer.reducer;
