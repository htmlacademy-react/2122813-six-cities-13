import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsStyle } from '../../utils';

type AdCardProps = {
  offer: Offer;
  onAdCardMouseOver({ id }:{ id:number }): void;
}

export default function AdCard({offer, onAdCardMouseOver}: AdCardProps): JSX.Element {
  const { isFavorite, isPremium, previewImage, price, title, type, rating } = offer;

  return (
    <article className="cities__card place-card" id = { offer.id.toString() } onMouseOver = { (evt) => {
      const target = evt.currentTarget as HTMLElement;
      onAdCardMouseOver({ id: +target.id }); //НЕ ЗАБЫТЬ ПОТОМ УБРАТЬ ПЛЮС, ЧТОБЫ НЕ БЫЛО КАК В ПРОШЛЫЙ РАЗ!
    }}
    >
      <div className="place-card__mark">
        <span>{ isPremium ? 'Premium' : '' }</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={ previewImage } width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={ `place-card__bookmark-button ${ isFavorite ? 'place-card__bookmark-button--active' : '' } button` } type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingStarsStyle(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/${ offer.id }` }> { title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}
