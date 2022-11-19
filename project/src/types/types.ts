export type citiesCardObj = {
  id: number;
  mark: string | null;
  imgSrc: string;
  priceValue: string;
  priceText: string;
  name: string;
  type: string;
};

export type citiesCardsArr = citiesCardObj[];

export type citiesItemProps = {
  card: citiesCardObj;
}

export type citiesCardListProps = {
  cards: citiesCardsArr;
};

export type mainProps = {
  links: string;
  cardArr: citiesCardsArr;
}

export type layoutProps = {
  userEmail: string | null;
}

export type tabsProps = {
  links: string;
};
