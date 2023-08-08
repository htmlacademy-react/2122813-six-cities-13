import { createReducer } from '@reduxjs/toolkit';
import { CitiesName, AuthorizationStatus } from '../const';
import { intialStateType } from '../types/initial-state';
import { filterOffers, pickCity, loadOffers, setOffersDataLoading, setError, setUserEmail,
  requireAuthorization, loadOfferInfo, loadNearbyOffers, loadOfferComments, setCommentDataSending, setCurrentOfferDataLoading } from './action';

const intialState: intialStateType = {
  cityName: CitiesName.PARIS,
  offers: [],
  filteredOffers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
  error: null,
  currentOffer: {
    offerInfo: null,
    comments: [],
    nearbyOffers: [],
    isCommentDataSending: false,
  },
  isCurrentOfferDataLoading: false,
};

export const reducer = createReducer(intialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.cityName);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadOfferInfo, (state, action) => {
      state.currentOffer.offerInfo = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.currentOffer.nearbyOffers = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentOffer.comments = action.payload;
    })
    .addCase(setCurrentOfferDataLoading, (state, action) => {
      state.isCurrentOfferDataLoading = action.payload;
    })
    .addCase(setCommentDataSending, (state, action) => {
      state.currentOffer.isCommentDataSending = action.payload;
    });
});
