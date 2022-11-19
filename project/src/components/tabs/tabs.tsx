import {NavLink} from 'react-router-dom';
import {tabsProps} from '../../types/types';

function Tabs ({links}: tabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <NavLink className="locations__item-link tabs__item" to={links}>
              <span>Paris</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink className="locations__item-link tabs__item" to={links}>
              <span>Cologne</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink className="locations__item-link tabs__item" to={links}>
              <span>Brussels</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink className="locations__item-link tabs__item tabs__item--active" to={links}>
              <span>Amsterdam</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink className="locations__item-link tabs__item" to={links}>
              <span>Hamburg</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink className="locations__item-link tabs__item" to={links}>
              <span>Dusseldorf</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
