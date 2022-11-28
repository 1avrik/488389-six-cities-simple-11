import { Dispatch, SetStateAction } from 'react';

export type offer = {
  id: number;
  isPremium?: true;
  price: number;
  rating: number;
  name: string;
  type: string;
  images: string[];
  features: offerFeatures;
  benefits: string[];
  host: offerHost;
  description: string[];
};

export type offerFeatures = {
  entire: string;
  bedrooms: string;
  adults: string;
};

export type offerHost = {
  name: string;
  isPro: boolean;
  photo: string;
};

export type offerArray = offer[];

export type review = {
  id: number;
  offerId: number;
  author: reviewAuthor;
  rating: number;
  text: string;
  data: string;
};

export type reviewAuthor = {
  name: string;
  photo: string;
};

export type reviewArr = review[];

export type setCurrentId = Dispatch<SetStateAction<number | null>>;

export type offerRewiewFormData = {
  userId: string;
  offerId: string;
  rating: string;
  text: string;
};

export type setRewiewFormData = Dispatch<SetStateAction<offerRewiewFormData>>;

export type appProps = {
  offers: offerArray;
  reviews: reviewArr;
  userEmail: string;
}

export type citiesItemProps = {
  offer: offer;
  setCurrentId: setCurrentId;
}

export type citiesCardListProps = {
  offers: offerArray;
  setCurrentId: setCurrentId;
};

export type mainProps = {
  links: string;
  offers: offerArray;
}

export type layoutProps = {
  userEmail?: string;
}

export type tabsProps = {
  links: string;
};

export type offerProps = {
  offers: offerArray;
  reviews: reviewArr;
};

export type imgProps = {
  src: string;
  alt: string;
};

export type offerFeatureProps = {
  type: string;
  value: string;
};

export type benefitProps = {
  benefit: string;
};

export type descriptionProps = {
  paragraph: string;
};

export type rewiewsProps = {
  rewiews: reviewArr;
  rewiewFormData: offerRewiewFormData;
  setRewiewFormData: setRewiewFormData;
};

export type rewiewProps = {
  rewiew: review;
};

export type offerRewiewFormProps = {
  rewiewFormData: offerRewiewFormData;
  setRewiewFormData: setRewiewFormData;
};
