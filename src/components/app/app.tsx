import { AppRoute, SPINNER_COLOR } from '../../const';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRout from '../private-route/private-route';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';
import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';
import { HistoryRouter } from '../hustory-route/history-route';
import { browserHistory } from '../../browser-history';

const override: CSSProperties = {
  display: 'block',
  margin: 'auto',
};

type AppScreenProps = {
  reviews: Review[];
}

export default function App({ reviews }: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.filteredOffers);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <ClipLoader
        color={ SPINNER_COLOR }
        loading={ isOffersDataLoading }
        cssOverride={ override }
        size={150}
        aria-label="Loading Spinner"
      />
    );
  }

  return (
    <HistoryRouter history={ browserHistory }>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainScreen offers={offers} />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRout>
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
    </HistoryRouter>
  );
}
