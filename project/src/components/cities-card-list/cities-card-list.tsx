import CetiesCardItem from '../cities-card-item/cities-card-item';
import { citiesCardListProps } from '../../types/types';

function CitiesCardList (props: citiesCardListProps): JSX.Element {
  const { setCurrentId, offers } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CetiesCardItem key={offer.id} offer={offer} setCurrentId={setCurrentId}/>
      ))}
    </div>
  );
}

export default CitiesCardList;
