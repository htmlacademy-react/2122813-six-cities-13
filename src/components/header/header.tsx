import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction, fetchFavoriteOffersAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserData } from '../../store/authorization-user-process/selectors';
import { getFavoriteOffers } from '../../store/offers-data/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userData = useAppSelector(getUserData);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {
              authorizationStatus === AuthorizationStatus.Auth &&
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" onClick={ () => {
                    dispatch(fetchFavoriteOffersAction());
                  } } to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{ userData ? userData.eMail : '' }</span>
                    <span className="header__favorite-count">{ favoriteOffers.length }</span>
                  </Link>
                </li>
                <li className="header__nav-item" onClick={() => {
                  dispatch(logoutAction());
                }}
                >
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            }
            {
              authorizationStatus !== AuthorizationStatus.Auth &&
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
