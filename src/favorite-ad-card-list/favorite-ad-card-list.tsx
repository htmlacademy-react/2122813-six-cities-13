import { Offer } from '../types/offer';
import FavoriteAdCard from '../favorite-ad-card/favorite-ad-card';
import { CitiesName } from '../const';

type FavoriteAdCardListProps = {
  offers: Offer[];
}

export default function FavoriteAdCardList({ offers }: FavoriteAdCardListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.filter((offer) => offer.city.name === CitiesName.AMSTERDAM).map((offer) => <FavoriteAdCard key={ offer.id } offer={ offer }/>)}
      </div>
    </li>
  );
}
