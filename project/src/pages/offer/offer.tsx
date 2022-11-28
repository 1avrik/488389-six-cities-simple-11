import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { offerProps, offerRewiewFormData } from '../../types/types';
import OfferImg from '../../components/offer-img/offer-img';
import OfferFeature from '../../components/offer-feature/offer-feature';
import OfferBenefit from '../../components/offer-benefit/offer-benefit';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferRewiews from '../../components/offer-rewiews/offer-rewiews';
import NotFound from '../../components/not-found/not-found';
import { MAX_RATING } from '../../mocks/mocks';

function Offer ({ offers, reviews }: offerProps) {
  const [rewiewFormData, setRewiewFormData] = useState<offerRewiewFormData>({
    userId: '1',
    offerId: `${reviews.length}`,
    rating: '',
    text: '',
  });
  const params = useParams();
  const currentId = params.id ? Number(params.id) : null;
  const currentOffer = [...offers].find((offer) => offer.id === currentId);

  const currentRewiews = [];
  for (const rewiew of reviews) {
    if (rewiew.offerId === currentId) {
      currentRewiews.push(rewiew);
    }
  }

  if (currentOffer) {
    const currentOfferRating = ((MAX_RATING * currentOffer.rating) / 100).toFixed(1);
    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                currentOffer.images.map((img) => (
                  <OfferImg key={img} src={img} alt={currentOffer.name}/>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                currentOffer.isPremium
                  ? <div className="property__mark"><span>Premium</span></div>
                  : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{currentOffer.name}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${currentOffer.rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOfferRating}</span>
              </div>
              <ul className="property__features">
                {
                  Object.entries(currentOffer.features).map(([type, value]) => (
                    <OfferFeature key={type} type={type} value={value} />
                  ))
                }
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    currentOffer.benefits.map((benefit) => (
                      <OfferBenefit key={benefit} benefit={benefit}/>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className=
                    {
                      currentOffer.host.isPro
                        ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'
                        : 'property__avatar-wrapper user__avatar-wrapper'
                    }
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={`img/${currentOffer.host.photo}`}
                      width="74"
                      height="74"
                      alt={currentOffer.host.name}
                    />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {
                    currentOffer.host.isPro
                      ? <span className="property__user-status">Pro</span>
                      : null
                  }
                </div>
              </div>
              <div className="property__description">
                {
                  currentOffer.description.map((paragraph) => (
                    <OfferDescription key={paragraph} paragraph={paragraph}/>
                  ))
                }
              </div>
            </div>
            <section className="property__reviews reviews">
              <div className="property__wrapper">
                <OfferRewiews rewiews={currentRewiews} setRewiewFormData={setRewiewFormData} rewiewFormData={rewiewFormData} />
              </div>
            </section>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

export default Offer;
