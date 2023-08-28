import { AppRoute, AuthorizationStatus, SPINNER_COLOR } from '../../const';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRout from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties, useEffect } from 'react';
import { HistoryRouter } from '../hustory-route/history-route';
import { browserHistory } from '../../browser-history';
import { getOffersDataLoadingStatus } from '../../store/offers-data/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/authorization-user-process/selectors';

const override: CSSProperties = {
  display: 'block',
  margin: 'auto',
};

export default function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, authorizationStatus]);

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
          path = { AppRoute.Root }
          element = {<MainScreen />}
        />
        <Route
          path = { AppRoute.Favorites }
          element = {
            <PrivateRout>
              <FavoritesScreen />
            </PrivateRout>
          }
        />
        <Route
          path = { AppRoute.Login }
          element = { <LoginScreen /> }
        />
        <Route path={ AppRoute.Offer }>
          <Route path = ':id' element = { <OfferScreen /> } />
        </Route>
        <Route
          path = '*'
          element = { <NotFoundScreen /> }
        />
      </Routes>
    </HistoryRouter>
  );
}
