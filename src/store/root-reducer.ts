import { combineReducers } from '@reduxjs/toolkit';
import { SlicesName } from '../const';
import { authorizationUserProcess } from './authorization-user-process/authorization-user-process';
import { userReview } from './user-review/user-review';
import { offersData } from './offers-data/offers-data';
import { pageEvents } from './page-events/page-events';

export const rootReducer = combineReducers({
  [SlicesName.User]: authorizationUserProcess.reducer,
  [SlicesName.Page]: pageEvents.reducer,
  [SlicesName.OffersData]: offersData.reducer,
  [SlicesName.UserReview]: userReview.reducer,
});
