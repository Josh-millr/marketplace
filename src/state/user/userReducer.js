import { createSlice } from '@reduxjs/toolkit';
import * as actionCreator from './userAction';

const initialState = {
  user: {
    // New Properties Added
    totalProjects: 129378,
    ongoingJobs: 129378,
    completedJobs: 129378,
    totalPayout: 12937830,
    activeProjects: [],
    draftProjects: [],
    notifications: [],
  },
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: actionCreator.setUser,
    deleteUser: actionCreator.deleteUser,
    updateUser: actionCreator.updateUser,
  },
});

export const userActions = userReducer.actions;
export default userReducer.reducer;
