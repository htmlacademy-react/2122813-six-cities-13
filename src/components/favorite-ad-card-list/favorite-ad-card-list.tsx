import FavoriteAdCard from '../favorite-ad-card/favorite-ad-card';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { filterOffers, setCity } from '../../store/offers-data/offers-data';
import { getFavoriteOffers } from '../../store/offers-data/selectors';

export default function FavoriteAdCardList(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteCities = new Set<string>();
  const dispatch = useAppDispatch();
  favoriteOffers.forEach((offer) => favoriteCities.add(offer.city.name));

  return (
    <>
      { Array.from(favoriteCities.values()).map((city) => (
        <li className="favorites__locations-items" key={ city }>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={ () => {
                dispatch(setCity(city));
                dispatch(filterOffers());
              } }
              >
                <span>{ city }</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            { favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => <FavoriteAdCard key={ offer.id } offer={ offer }/>) }
          </div>
        </li>
      )
      ) }
    </>
  );
}
