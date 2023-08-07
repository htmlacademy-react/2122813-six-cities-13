import AdCardList from '../../components/ad-card-list/ad-card-list';
import Header from '../../components/header/header';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import SortingTypeForm from '../../components/sorting-type-form/sorting-type-form';
import { useSort } from '../../hooks/use-sort';
import { SortingTypes } from '../../const';

type MainScreenProps = {
  offers: Offer[];
}

export default function MainScreen ({ offers }: MainScreenProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);
  const currentCity = useAppSelector((state) => state.cityName);
  const [sortingType, setSortingType] = useState<string | null>(SortingTypes.Popular);
  const sortedOffers = useSort(offers, sortingType);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList setSortingType={ setSortingType } currentCity={ currentCity } />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ offers.length } places to stay in { currentCity }</b>
              <SortingTypeForm onSortingTypeClick={setSortingType} sortingType={sortingType} />
              <div className="cities__places-list places__list tabs__content">
                <AdCardList isMainScreen offers={ sortedOffers } setActiveOfferId={ setActiveOfferId } />
              </div>
            </section>
            <div className="cities__right-section">
              <Map isMainScreen offers={ offers } activeOfferId={ activeOfferId }/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
