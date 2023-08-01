import { Offer } from '../../types/offer';
import AdCard from '../ad-card/ad-card';

type AdCardListProps = {
  offers: Offer[];
  isMainScreen: boolean;
  setActiveOfferId?: (id:number) => void;
}

export default function AdCardList({ offers, setActiveOfferId, isMainScreen }: AdCardListProps): JSX.Element {
  return (
    <>
      { offers.map((offer) => <AdCard isMainScreen={isMainScreen} onAdCardMouseOver={ setActiveOfferId } key={ +offer.id } offer={ offer } />)}
    </>
  );
}
// ПОМНИТЬ ПРО ПЛЮС!
