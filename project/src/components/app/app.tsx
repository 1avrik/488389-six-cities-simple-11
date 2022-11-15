import React from 'react';
import Main from '../../pages/main/main';
import Header from '../header/header';

type citiesCardObj = {
  id: number;
  mark: string;
  imgSrc: string;
  priceValue: string;
  priceText: string;
  name: string;
  type: string;
}

type sitiesCardsArr = citiesCardObj[];

const cardsData: sitiesCardsArr = [
  {
    id: 0,
    mark: 'Premium',
    imgSrc: 'img/apartment-01.jpg',
    priceValue: '&euro;120',
    priceText: '&#47;&nbsp;night',
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 1,
    mark: 'Зефирка',
    imgSrc: 'img/apartment-01.jpg',
    priceValue: '&euro;120',
    priceText: '&#47;&nbsp;night',
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment'
  },
];

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Header userEmail="Oliver.conner@gmail.com" />
      <Main links="/" citiesData={cardsData}/>
    </React.Fragment>
  );
}

export default App;
