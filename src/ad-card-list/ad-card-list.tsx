import { Offer } from '../types/offer';
import AdCard from '../components/ad-card/ad-card';
import { useState } from 'react';

type AdCardListProps = {
  offers: Offer[];
}

export default function AdCardList({ offers }: AdCardListProps): JSX.Element {
  const [idActiveAdCard, setIdActiveAdCard] = useState({ id: 0 });

  return (
    <>
      { offers.map((offer) => <AdCard onAdCardMouseOver={ setIdActiveAdCard } key={ idActiveAdCard.id + +offer.id } offer={ offer } />)}
    </>
  );
}
// ПОМНИТЬ ПРО ПЛЮС!
