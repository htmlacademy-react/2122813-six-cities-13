import { SlicesName } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

export const getOffersDataLoadingStatus = (state: State): boolean => state[SlicesName.OffersData].isOffersDataLoading;
export const getOffers = (state: State): Offer[]=> state[SlicesName.OffersData].offers;
export const getFilteredOffers = (state: State): Offer[]=> state[SlicesName.OffersData].filteredOffers;
export const getCityName = (state: State): string => state[SlicesName.OffersData].cityName;
export const getFavoriteOffersDataLoadingStatus = (state: State): boolean => state[SlicesName.OffersData].isFavoriteOffersDataLoading;
export const getFavoriteOffers = (state: State): Offer[]=> state[SlicesName.OffersData].favoriteOffers;
export const getNearbyOffers = (state: State): Offer[] => state[SlicesName.OffersData].nearbyOffers;
export const getCurrentOfferDataLoadingStatus = (state: State): boolean => state[SlicesName.OffersData].isCurrentOfferDataLoading;
export const getOfferInfo = (state: State): Offer | null => state[SlicesName.OffersData].offerInfo;
export const getComments = (state: State): Review[] => state[SlicesName.OffersData].comments;
