import AdCardList from '../../components/ad-card-list/ad-card-list';
import Header from '../../components/header/header';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  offers: Offer[];
}

export default function MainScreen ({ offers }: MainScreenProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(0);
  const currentCity = useAppSelector((state) => state.cityName);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={ currentCity } />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ offers.length } places to stay in { currentCity }</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <AdCardList isMainScreen offers={ offers } setActiveOfferId={ setActiveOfferId } />
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
