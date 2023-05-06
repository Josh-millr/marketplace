import { createSlice } from '@reduxjs/toolkit';
import * as actionCreator from './userAction';

const initialState = {
  user: {
    _id: '641844c86c9ec4a61f22e055',
    email: 'meshphils@gmail.com',
    username: 'meshachys',
    password: '$2b$10$NATm.UCsG6K8f6zy0PwXJOFF9gbmW94C51y7kFKHDPtU6BF3aPiV6',
    accounttype: 'seller',
    firstname: 'meshach',
    lastname: 'philips',
    location: 'nigeria',
    role: 'client',
    email_verified: false,
    balance: 0,
    withdrawn: 0,
    tempt_code: '2RLVd',
    createdAt: '2023-03-20T11:34:32.036Z',
    updatedAt: '2023-03-20T11:34:32.036Z',
    __v: 0,
    // New Properties Added
    totalProjects: 129378,
    ongoingJobs: 129378,
    completedJobs: 129378,
    totalPayout: 12937830,
    activeProjects: [],
    draftProjects: [],
    notifications: []
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
