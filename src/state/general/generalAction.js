/* eslint-disable no-param-reassign */
export const startLoading = (state) => {
  state.loading = true;
};

export const stopLoading = (state) => {
  state.loading = false;
};

export const storeCategory = (state, action) => {
  state.category = action.payload;
};
