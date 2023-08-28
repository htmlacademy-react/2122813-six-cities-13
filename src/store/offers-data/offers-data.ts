import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersData } from '../../types/state';
import { fetchFavoriteOffersAction, fetchOfferInfoAction, fetchOffersAction, sendOfferCommentAction, setOfferFavoriteStatusAction } from '../api-actions';
import { SlicesName, CitiesName } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

const initialState: OffersData = {
  isOffersDataLoading: false,
  offers: [],
  filteredOffers: [],
  cityName: CitiesName.PARIS,
  isFavoriteOffersDataLoading: false,
  favoriteOffers: [],
  nearbyOffers:[],
  isCurrentOfferDataLoading: true,
  offerInfo: null,
  comments: [],
};

export const offersData = createSlice({
  name: SlicesName.OffersData,
  initialState,
  reducers: {
    filterOffers: (state) => {
      state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
      })
      .addCase(setOfferFavoriteStatusAction.fulfilled, (state, action) => {
        const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
        const favoriteIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
        const nearbyIndex = state.nearbyOffers.findIndex((offer) => offer.id === action.payload.id);

        state.offers = [
          ...state.offers.slice(0, index),
          action.payload,
          ...state.offers.slice(index + 1),
        ];

        if (state.offerInfo) {
          state.offerInfo.isFavorite = action.payload.isFavorite;
        }

        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers.splice(favoriteIndex, 1);
        }
        state.nearbyOffers[nearbyIndex] = action.payload;
        state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(fetchOfferInfoAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchOfferInfoAction.fulfilled, (
        state,
        action: PayloadAction<{ offerData: Offer; nearbyOffersData: Offer[]; commentsData: Review[] }>) => {
        const { offerData, nearbyOffersData, commentsData } = action.payload;
        state.offerInfo = offerData;
        state.comments = commentsData;
        state.nearbyOffers = nearbyOffersData;
        state.isCurrentOfferDataLoading = false;
      })
      .addCase(fetchOfferInfoAction.rejected, (state) => {
        state.isCurrentOfferDataLoading = false;
      })
      .addCase(sendOfferCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  }
});

export const { filterOffers, setCity } = offersData.actions;
