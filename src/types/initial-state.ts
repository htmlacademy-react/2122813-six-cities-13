import { Offer } from './offer';

export type intialStateType = {
  cityName: string | null;
  offers: Offer[];
  filteredOffers: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  userEmail: string;
  error: string | null;
}
