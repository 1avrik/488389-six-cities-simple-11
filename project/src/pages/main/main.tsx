import React, { useState } from 'react';
import CitiesCardList from '../../components/cities-card-list/cities-card-list';
import { mainProps } from '../../types/types';
import Tabs from '../../components/tabs/tabs';

function Main (props: mainProps): JSX.Element {
  const { links, offers } = props;
  // const [currentId, setCurrentId] = useState<number | null>(null);
  const [, setCurrentId] = useState<number | null>(null);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs links={links}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            {/* <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by </span>
              <span className="places__sorting-type">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active">Popular</li>
                <li className="places__option">Price: low to high</li>
                <li className="places__option">Price: high to low</li>
                <li className="places__option">Top rated first</li>
              </ul>
            </form> */}
            <CitiesCardList offers={offers} setCurrentId={setCurrentId}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
