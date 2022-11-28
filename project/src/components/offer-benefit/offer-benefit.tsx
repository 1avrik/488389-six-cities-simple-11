import { benefitProps } from '../../types/types';

function OfferBenefit ({ benefit }: benefitProps) {
  return (
    <li className="property__inside-item">
      {benefit}
    </li>
  );
}

export default OfferBenefit;
