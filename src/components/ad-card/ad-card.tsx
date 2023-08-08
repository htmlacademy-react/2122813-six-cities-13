import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsStyle } from '../../utils';
import { AdClasses } from '../../const';
import { offerInfoInitAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type AdCardProps = {
  offer: Offer;
  onAdCardMouseOver?: (id:number) => void;
  isMainScreen: boolean;
}

export default function AdCard({ offer, onAdCardMouseOver, isMainScreen }: AdCardProps): JSX.Element {
  const { isFavorite, isPremium, previewImage, price, title, type, rating, id } = offer;
  const dispatch = useAppDispatch();

  return (
    <article
      className={ isMainScreen ? AdClasses.ArticleMainAdClass : AdClasses.ArticlePropertyAdClass }
      id = { id.toString() }
      onMouseOver = { onAdCardMouseOver ? (evt) => {
        const target = evt.currentTarget as HTMLElement;
        onAdCardMouseOver(+target.id); //НЕ ЗАБЫТЬ ПОТОМ УБРАТЬ ПЛЮС, ЧТОБЫ НЕ БЫЛО КАК В ПРОШЛЫЙ РАЗ!
      } : undefined }
    >
      { isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null }
      <div className={ isMainScreen ? AdClasses.ImageWrapperMainAdClass : AdClasses.ImageWrapperPropertyAdClass }>
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
            <span style={ { width: getRatingStarsStyle(Math.round(rating)) } } />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} onClick={() => {
            dispatch(offerInfoInitAction(id.toString()));
          }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{ type.slice(0,1).toUpperCase() + type.slice(1) }</p>
      </div>
    </article>
  );
}
