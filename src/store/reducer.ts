import { createReducer } from '@reduxjs/toolkit';
import { CitiesName } from '../const';
import { offers } from '../mocks/offers';
import { intialStateType } from '../types/initial-state';
import { filterOffers, pickCity } from './action';

const START_CITY_NAME = 'Paris';

const intialState: intialStateType = {
  cityName: CitiesName.PARIS,
  offers: offers.filter((offer) => offer.city.name === START_CITY_NAME),
};

export const reducer = createReducer(intialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.cityName);
    });
});
