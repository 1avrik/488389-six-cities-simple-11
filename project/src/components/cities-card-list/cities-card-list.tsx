import CetiesCardItem from '../cities-card-item/cities-card-item';
import { citiesCardListProps } from '../../types/types';

function CitiesCardList (props: citiesCardListProps): JSX.Element {
  const { cards } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <CetiesCardItem key={card.id} card={card}/>
      ))}
    </div>
  );
}

export default CitiesCardList;
