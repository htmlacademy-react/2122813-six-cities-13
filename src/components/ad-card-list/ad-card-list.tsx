import { Offer } from '../../types/offer';
import AdCard from '../ad-card/ad-card';

type AdCardListProps = {
  offers: Offer[];
  setActiveOfferId(id:number): void;
}

export default function AdCardList({ offers, setActiveOfferId }: AdCardListProps): JSX.Element {
  return (
    <>
      { offers.map((offer) => <AdCard onAdCardMouseOver={ setActiveOfferId } key={ +offer.id } offer={ offer } />)}
    </>
  );
}
// ПОМНИТЬ ПРО ПЛЮС!
