import { citiesItemProps } from '../../types/types';
import { Link } from 'react-router-dom';

function CitiesCardItem ({ setCurrentId, offer }: citiesItemProps): JSX.Element {
  // const {id, mark, imgSrc, priceValue, priceText, name, type} = card;
  const {id, isPremium, price, rating, name, type, images} = offer;
  return (
    <article
      onMouseEnter={() => {
        setCurrentId(id);
      }}
      onMouseLeave={() => {
        setCurrentId(null);
      }}
      className="cities__card place-card"
    >
      {isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : null }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={`img/${images[0]}`} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text"> / night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesCardItem;
