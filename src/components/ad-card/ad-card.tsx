import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsStyle } from '../../utils/utils';
import { AdClasses, AppRoute } from '../../const';
import { setOfferFavoriteStatusAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { browserHistory } from '../../browser-history';
import { getAuthorizationStatus } from '../../store/authorization-user-process/selectors';

type AdCardProps = {
  offer: Offer;
  isMainScreen: boolean;
  setActiveOfferId?: (offerId: string | null) => void;
}

export default function AdCard({ offer, isMainScreen, setActiveOfferId }: AdCardProps): JSX.Element {
  const { isFavorite, isPremium, previewImage, price, title, type, rating, id } = offer;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteStatus = `${Number(!isFavorite)}`;
  const dispatch = useAppDispatch();
  const handleFavoriteButtonClick = () => {
    if(authorizationStatus !== 'AUTH') {
      browserHistory.push(AppRoute.Login);

      return;
    }
    dispatch(setOfferFavoriteStatusAction({ id, favoriteStatus }));
  };

  return (
    <article
      className={isMainScreen ? AdClasses.ArticleMainAdClass : AdClasses.ArticlePropertyAdClass}
      onMouseOver={ setActiveOfferId ? (()=> {
        setActiveOfferId(id);
      }) : undefined}
      onMouseOut={setActiveOfferId ? (() => {
        setActiveOfferId(null);
      }) : undefined}
    >
      { isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null }
      <div className={ isMainScreen ? AdClasses.ImageWrapperMainAdClass : AdClasses.ImageWrapperPropertyAdClass }>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={ previewImage } width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={ `place-card__bookmark-button ${ isFavorite ? 'place-card__bookmark-button--active' : '' } button` } onClick={ handleFavoriteButtonClick } type="button">
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
          <Link to={`/offer/${offer.id}`}>
            { title }
          </Link>
        </h2>
        <p className="place-card__type">{ type.slice(0,1).toUpperCase() + type.slice(1) }</p>
      </div>
    </article>
  );
}
