import { Offer } from '../../types/offer';
import AdCard from '../ad-card/ad-card';

type AdCardListProps = {
  isMainScreen?: boolean;
  offers: Offer[];
  setActiveOfferId?: (offerId: string | null) => void;
}

export default function AdCardList({ isMainScreen, offers, setActiveOfferId }: AdCardListProps): JSX.Element {

  return (
    <>
      { offers.map((offer) => <AdCard isMainScreen={ Boolean(isMainScreen) } key={ offer.id } offer={ offer } setActiveOfferId={setActiveOfferId}/>) };
    </>
  );
}
