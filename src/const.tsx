export enum AppRoute {
  Favorites = '/favorites',
  Root = '/',
  Login = '/login',
  Offer = '/offer',
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

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

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
