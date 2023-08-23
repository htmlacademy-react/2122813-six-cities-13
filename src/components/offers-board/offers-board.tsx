import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { sortOffers } from '../../utils/utils';
import AdCardList from '../ad-card-list/ad-card-list';
import SortingTypeForm from '../sorting-type-form/sorting-type-form';
import { getSortType } from '../../store/page-events/selectors';
import { getCityName } from '../../store/offers-data/selectors';

type offersBoardProps = {
    offers: Offer[];
}


export default function OffersBoard({offers}: offersBoardProps) {
  const currentCity = useAppSelector(getCityName);
  const sortType = useAppSelector(getSortType);
  const sortedOffers = useMemo(() => sortOffers(offers, sortType), [offers, sortType]);

  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ offers.length } places to stay in { currentCity }</b>
      <SortingTypeForm />

      <div className="cities__places-list places__list tabs__content">
        <AdCardList offers={ sortedOffers } isMainScreen />

      </div>
    </section>
  );
}
