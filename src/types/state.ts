import { store } from '../store/index';
import { Offer } from './offer';
import { Review } from './review';
import { UserInfo } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthorizationUserProcess = {
  authorizationStatus: string;
  userData: UserInfo | null;
}

export type OffersData = {
  isOffersDataLoading: boolean;
  offers: Offer[];
  filteredOffers: Offer[];
  cityName: string;
  isFavoriteOffersDataLoading: boolean;
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  isCurrentOfferDataLoading: boolean;
  offerInfo: Offer | null;
  comments: Review[];
}

export type PageEvents = {
   currentOfferId: string | null;
   sortType: string;
}

export type CurrentOfferData = {
   isCurrentOfferDataLoading: boolean;
   offerInfo: Offer | null;
   comments: Review[];
}

export type UserReview = {
   isCommentDataSending: boolean;
}

export type FavoriteOffersData = {
  isFavoriteOffersDataLoading: boolean;
  favoriteOffers: Offer[];
}
