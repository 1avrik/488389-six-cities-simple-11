import { descriptionProps } from '../../types/types';

function OfferDescription ({ paragraph }: descriptionProps) {
  return (
    <p className="property__text">
      {paragraph}
    </p>
  );
}

export default OfferDescription;
