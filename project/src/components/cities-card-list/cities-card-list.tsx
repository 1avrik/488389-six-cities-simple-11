import CetiesCardItem from '../cities-card-item/cities-card-item';

type citiesCardObj = {
  id: number;
  mark: string;
  imgSrc: string;
  priceValue: string;
  priceText: string;
  name: string;
  type: string;
}

type citiesCardsArr = citiesCardObj[];

type citiesCardListProps = {
  cardData: citiesCardsArr;
}


function CitiesCardList (props: citiesCardListProps): JSX.Element {
  const { cardData } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardData.map((item) => (
        <CetiesCardItem key={item.id} card={item}/>
      ))}
    </div>
  );
}

export default CitiesCardList;
