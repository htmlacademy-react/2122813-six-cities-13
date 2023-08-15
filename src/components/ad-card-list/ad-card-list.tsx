import { Offer } from '../../types/offer';
import AdCard from '../ad-card/ad-card';

type AdCardListProps = {
  isMainScreen: boolean;
  offers: Offer[];
}

export default function AdCardList({ isMainScreen, offers }: AdCardListProps): JSX.Element {

  return (
    <>
      { offers.map((offer) => <AdCard isMainScreen={ isMainScreen } key={ offer.id } offer={ offer }/>) };
    </>
  );
}
