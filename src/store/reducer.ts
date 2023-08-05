import { createReducer } from '@reduxjs/toolkit';
import { CitiesName } from '../const';
import { intialStateType } from '../types/initial-state';
import { filterOffers, pickCity, loadOffers, setOffersDataLoading } from './action';

const intialState: intialStateType = {
  cityName: CitiesName.PARIS,
  offers: [],
  filteredOffers: [],
  isOffersDataLoading: false,

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
    });
});
