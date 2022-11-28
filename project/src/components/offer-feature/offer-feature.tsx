import { offerFeatureProps } from '../../types/types';

function OfferFeature ({type, value}: offerFeatureProps) {
  return (
    <li className={`property__feature property__feature--${type}`}>
      {value}
    </li>
  );
}

export default OfferFeature;
