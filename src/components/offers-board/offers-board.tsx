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
    setActiveOfferId: (offerId: string | null) => void;
}


export default function OffersBoard({offers, setActiveOfferId}: offersBoardProps) {
  const currentCity = useAppSelector(getCityName);
  const sortType = useAppSelector(getSortType);
  const sortedOffers = useMemo(() => sortOffers(offers, sortType), [offers, sortType]);

  const placesText = offers.length === 1 ? 'place' : 'places';

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ offers.length } { placesText } to stay in { currentCity }</b>
      <SortingTypeForm />

      <div className="cities__places-list places__list tabs__content">
        <AdCardList offers={ sortedOffers } isMainScreen setActiveOfferId={setActiveOfferId} />
      </div>
    </section>
  );
}
