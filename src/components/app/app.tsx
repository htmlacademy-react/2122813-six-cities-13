import { AppRoute, AuthorizationStatus } from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRout from '../private-route/private-route';

type AppScreenProps = {
  adCount: number;
}

export default function App({adCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainScreen adCount={adCount} />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRout
              authorizationStatus = {AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen />
            </PrivateRout>
          }
        />
        <Route
          path = {AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route path = {AppRoute.Offer}>
          <Route path = ':id' element = {<OfferScreen />} />
        </Route>
        <Route
          path = '*'
          element = {<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
