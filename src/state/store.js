import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/userReducer';
import generalReducer from './general/generalReducer';
import freelancerReducer from './user/client/clientReducer';
import clientReducer from './user/freelancer/freelancerReducer';

/**
 * The configureStore function takes an options object as an argument.
 * In the example above, we are passing a reducer property to the options object,
 * which specifies the reducers for the store.You can also specify other options
 * such as middleware and enhancers in the options object.
 *
 * @see https://redux-toolkit.js.org/api/configureStore
 */

const store = configureStore({
  reducer: {
    user: userReducer,
    client: clientReducer,
    general: generalReducer,
    freelancer: freelancerReducer,
  },
});

export default store;
