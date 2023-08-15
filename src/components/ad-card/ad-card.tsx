import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsStyle } from '../../utils';
import { AdClasses, AppRoute } from '../../const';
import { fetchOfferInfoAction, setOfferFavoriteStatusAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentOfferId } from '../../store/page-events/page-events';
import { browserHistory } from '../../browser-history';
import { getAuthorizationStatus } from '../../store/authorization-user-process/selectors';
import { useState } from 'react';

type AdCardProps = {
  offer: Offer;
  isMainScreen: boolean;
}

export default function AdCard({ offer, isMainScreen }: AdCardProps): JSX.Element {
  const { isFavorite, isPremium, previewImage, price, title, type, rating, id } = offer;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFavoriteOffer, setFavoriteOffer] = useState<boolean>(isFavorite);
  const favoriteStatus = `${+!isFavoriteOffer}`;
  const dispatch = useAppDispatch();
  const handleFavoriteButtonClick = () => {
    if(authorizationStatus !== 'AUTH') {
      browserHistory.push(AppRoute.Login);

      return;
    }
    setFavoriteOffer((prevState) => !prevState);
    dispatch(setOfferFavoriteStatusAction({ id, favoriteStatus }));
  };

  return (
    <article
      className={isMainScreen ? AdClasses.ArticleMainAdClass : AdClasses.ArticlePropertyAdClass}
      onMouseOver={ ()=> {
        dispatch(setCurrentOfferId(id));
      }}
      onMouseOut={() => {
        dispatch(setCurrentOfferId(null));
      }}
    >
      { isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null }
      <div className={ isMainScreen ? AdClasses.ImageWrapperMainAdClass : AdClasses.ImageWrapperPropertyAdClass }>
        <Link to="/">
          <img className="place-card__image" src={ previewImage } width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={ `place-card__bookmark-button ${ isFavoriteOffer ? 'place-card__bookmark-button--active' : '' } button` } onClick={ handleFavoriteButtonClick } type="button">
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
          <Link to={ `/offer/${offer.id}` } onClick={ () => {
            dispatch(fetchOfferInfoAction(id.toString()));
          } }
          >
            { title }
          </Link>
        </h2>
        <p className="place-card__type">{ type.slice(0,1).toUpperCase() + type.slice(1) }</p>
      </div>
    </article>
  );
}
