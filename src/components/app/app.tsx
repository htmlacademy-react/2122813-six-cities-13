import { AppRoute, AuthorizationStatus } from '../../const';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRout from '../private-route/private-route';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  reviews: Review[];
}

export default function App({ reviews }: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

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
        <Route path={`${AppRoute.Offer}/:id`}
          element = {<OfferScreen offers={offers} reviews={reviews} />}
        />
        <Route
          path = '*'
          element = {<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
