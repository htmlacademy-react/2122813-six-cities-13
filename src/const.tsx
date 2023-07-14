export const Setting = {
  adCount: 5,
} as const;

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
