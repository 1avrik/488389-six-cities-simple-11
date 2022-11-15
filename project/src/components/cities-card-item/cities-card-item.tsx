type citiesCardObj = {
  mark: string;
  imgSrc: string;
  priceValue: string;
  priceText: string;
  name: string;
  type: string;
}

type CitiesCardItemProps = {
  card: citiesCardObj;
}

function CitiesCardItem (props: CitiesCardItemProps): JSX.Element {
  const { card } = props;
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>{card.mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={card.imgSrc} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{card.priceValue}</b>
            <span className="place-card__price-text">{card.priceText}</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* <span style="width: 80%"></span> */}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{card.name}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default CitiesCardItem;
