import Header from '../../components/header/header';
import FavoriteAdCardList from '../../components/favorite-ad-card-list/favorite-ad-card-list';
import { FavoritesEmpty } from '../../components/favorites-empty/favorites-empty';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/favorites-offers-data/selectors';
import { Link } from 'react-router-dom';

export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header />
      { !favoriteOffers.length ? <FavoritesEmpty/> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteAdCardList />
              </ul>
            </section>
          </div>
        </main> }
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}
