/* eslint-disable no-param-reassign */
export const setUser = (state, action) => {
  state.user = action.payload;
};

export const updateUser = (state, action) => {
  state.user = { ...state.user, ...action.payload };
};

export const deleteUser = (state) => {
  state.user = {};
};
