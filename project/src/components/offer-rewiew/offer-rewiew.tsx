import { rewiewProps } from '../../types/types';

function OfferRewiew ({ rewiew }: rewiewProps) {
  const dateСonversion = new Date(rewiew.data);
  const MONTS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentDate = `${MONTS[dateСonversion.getMonth()]} ${dateСonversion.getFullYear()}`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={`img/${rewiew.author.photo}`}
            width="54"
            height="54"
            alt={rewiew.author.name}
          />
        </div>
        <span className="reviews__user-name">
          {rewiew.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rewiew.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {rewiew.text}
        </p>
        <time className="reviews__time" dateTime={rewiew.data}>{currentDate}</time>
      </div>
    </li>
  );
}

export default OfferRewiew;
