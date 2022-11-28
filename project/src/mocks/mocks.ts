import { offerArray } from '../types/types';

export const userEmail = 'Oliver.conner@gmail.com';

export const MAX_RATING = 5;

export const offers: offerArray = [
  {
    id: 3,
    isPremium: true,
    price: 120,
    rating: 80,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    images: [
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'room.jpg',
      'apartment-03.jpg',
    ],
    features: {
      entire: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults'
    },
    benefits: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      photo: 'avatar-angelina.jpg'
    },
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ]
  },
  {
    id: 2,
    price: 120,
    rating: 60,
    name: 'Wood and stone place',
    type: 'Private room',
    images: [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg',
    ],
    features: {
      entire: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults'
    },
    benefits: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      photo: 'avatar-angelina.jpg'
    },
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ]
  },
  {
    id: 1,
    price: 132,
    rating: 55,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    images: [
      'apartment-02.jpg',
      'room.jpg',
      'apartment-01.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg',
    ],
    features: {
      entire: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults'
    },
    benefits: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: false,
      photo: 'avatar-angelina.jpg'
    },
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ]
  },
  {
    id: 0,
    price: 180,
    rating: 75,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    images: [
      'apartment-03.jpg',
      'apartment-02.jpg',
      'room.jpg',
      'apartment-01.jpg',
      'studio-01.jpg',
      'apartment-01.jpg',
    ],
    features: {
      entire: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults'
    },
    benefits: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      photo: 'avatar-angelina.jpg'
    },
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ]
  },
];

export const reviews = [
  {
    id: 3,
    offerId: 0,
    author: {
      name: 'Max',
      photo: 'avatar-max.jpg'
    },
    rating: 60,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    data: '2020-01-24'
  },
  {
    id: 2,
    offerId: 1,
    author: {
      name: 'Noah',
      photo: 'avatar-max.jpg'
    },
    rating: 40,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    data: '2019-03-24'
  },
  {
    id: 1,
    offerId: 2,
    author: {
      name: 'Liam',
      photo: 'avatar-max.jpg'
    },
    rating: 20,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    data: '2021-02-24'
  },
  {
    id: 0,
    offerId: 3,
    author: {
      name: 'Mason',
      photo: 'avatar-max.jpg'
    },
    rating: 80,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    data: '2019-12-24'
  },
  {
    id: 4,
    offerId: 0,
    author: {
      name: 'Jacob',
      photo: 'avatar-max.jpg'
    },
    rating: 80,
    text: 'Dad has come!',
    data: '2019-10-24'
  },
  {
    id: 5,
    offerId: 1,
    author: {
      name: 'William',
      photo: 'avatar-max.jpg'
    },
    rating: 40,
    text: 'You have come very fast.',
    data: '2019-07-24'
  },
  {
    id: 6,
    offerId: 2,
    author: {
      name: 'Ethan',
      photo: 'avatar-max.jpg'
    },
    rating: 20,
    text: 'My car won\'t start.',
    data: '2019-04-24'
  },
  {
    id: 7,
    offerId: 3,
    author: {
      name: 'Michael',
      photo: 'avatar-max.jpg'
    },
    rating: 60,
    text: 'I read the letter. Stood up. Sat down. Pondered for a minute. Then reread the letter again.',
    data: '2019-02-24'
  },
  {
    id: 8,
    offerId: 0,
    author: {
      name: 'Alexander',
      photo: 'avatar-max.jpg'
    },
    rating: 80,
    text: 'It is only with the heart that one can see rightly.',
    data: '2018-01-24'
  },
  {
    id: 9,
    offerId: 1,
    author: {
      name: 'William',
      photo: 'avatar-max.jpg'
    },
    rating: 60,
    text: 'One can become a writer only if he is talented.',
    data: '2021-02-24'
  },
  {
    id: 10,
    offerId: 2,
    author: {
      name: 'Liam',
      photo: 'avatar-max.jpg'
    },
    rating: 40,
    text: 'They say, the winter will be cold.',
    data: '2020-03-24'
  },
  {
    id: 11,
    offerId: 3,
    author: {
      name: 'William',
      photo: 'avatar-max.jpg'
    },
    rating: 20,
    text: 'It becomes dark very fast here.',
    data: '2021-01-24'
  },
];
