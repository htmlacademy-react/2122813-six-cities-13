import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import OffersBoard from '../../components/offers-board/offers-board';
import { getFilteredOffers } from '../../store/offers-data/selectors';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { useState } from 'react';

export default function MainScreen (): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className={ offers.length ? 'page page--gray page--main' : 'page__main--index-empty' }>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          { !offers.length ? <MainEmpty /> :
            <div className="cities__places-container container">
              <OffersBoard offers={ offers } setActiveOfferId={setActiveOfferId} />
              <div className="cities__right-section">
                <Map isMainScreen offers={ offers } activeOfferId={activeOfferId} />
              </div>
            </div> }
        </div>
      </main>
    </div>
  );
}
