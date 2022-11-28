import { imgProps } from '../../types/types';

function OfferImg ({src, alt}: imgProps) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={`img/${src}`} alt={alt} />
    </div>
  );
}

export default OfferImg;
