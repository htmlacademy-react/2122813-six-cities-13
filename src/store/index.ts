import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { creatAPI} from '../services/services';

export const api = creatAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});
