import { AppRoute, AuthorizationStatus } from '../../const';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRout from '../private-route/private-route';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offers: Offer[];
  reviews: Review[];
}

export default function App({ offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainScreen offers={offers} />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRout
              authorizationStatus = {AuthorizationStatus.Auth}
            >
              <FavoritesScreen offers={offers} />
            </PrivateRout>
          }
        />
        <Route
          path = {AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route path = {AppRoute.Offer}>
          <Route path = ':id' element = {<OfferScreen offers={offers} reviews={reviews} />} />
        </Route>
        <Route
          path = '*'
          element = {<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
