export enum AppRoute {
  Favorites = '/favorites',
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  Load = '/load',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CitiesName {
  AMSTERDAM = 'Amsterdam',
  COLOGNE = 'Cologne',
  PARIS = 'Paris',
  DUSSELDORF = 'Dusseldorf',
  BRUSSELS = 'Brussels',
  HAMBURG = 'Hamburg',
}

export const RATING_STARS_STYLE_KOEF = 20;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export enum AdClasses {
  ArticlePropertyAdClass = 'near-places__card place-card',
  ArticleMainAdClass = 'cities__card place-card',
  ImageWrapperPropertyAdClass = 'near-places__image-wrapper place-card__image-wrapper',
  ImageWrapperMainAdClass = 'cities__image-wrapper place-card__image-wrapper',
}

export enum MapClasses {
  SectionMainMapClass = 'cities__map map',
  SectionPropertyMapClass = 'offer__map map',
}

export enum Actions {
  PICK_CITY = 'PICK_CITY',
  FILTER_OFFERS ='FILTER_OFFERS',
  LOAD_OFFERS = 'LOAD_OFFERS',
  SET_STATUS_OFFERS_DATA_LOADING = 'SET_STATUS_OFFERS_DATA_LOADING',
  REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION',
  SET_USER_EMAIL = 'SET_USER_EMAIL',
  SET_ERROR = 'SET_ERROR',
  REDIRECT_ROUTE = 'REDIRECT_ROUTE',
  LOAD_OFFER_INFO = 'LOAD_OFFER_INFO',
  LOAD_NEARBY_OFFERS = 'LOAD_NEARBY_OFFERS',
  LOAD_OFFER_COMMENTS = 'LOAD_OFFER_COMMENTS',
  SET_CURRENT_OFFER_DATA_LOADING = 'SET_CURRENT_OFFER_DATA_LOADING',
  SET_COMMENT_DATA_SENDING = 'SET_COMMENT_DATA_SENDING',
  SET_SORT_TYPE = 'SET_SORT_TYPE',
  SET_CURRENT_OFFER_ID = 'SET_CURRENT_OFFER_ID',
}

export enum SortingTypes {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum APIRoute {
  JustSlash = '/',
  Offers = '/offers/',
  Login = '/login',
  Logout = '/logout',
  Comment = '/comments/',
  NearbyOffers = '/nearby',
  FavoriteOffers = '/favorite/',
}

export enum SlicesName {
  Page = 'PAGE',
  User = 'USER',
  OffersData = 'OFFERS_DATA',
  FavoriteOffersData = 'FAVORITE_OFFERS_DATA',
  CurrentOfferData = 'CURRENT_OFFER_DATA',
  UserReview = 'USER_REVIEW',
}

export const SPINNER_COLOR = '#7777FF';
