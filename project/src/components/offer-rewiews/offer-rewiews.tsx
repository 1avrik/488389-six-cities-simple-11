import { rewiewsProps } from '../../types/types';
import OfferRewiew from '../offer-rewiew/offer-rewiew';
import OfferRewiewForm from '../offer-rewiew-form/offer-rewiew-form';

function OfferRewiews ({ rewiews, rewiewFormData, setRewiewFormData }: rewiewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount"> {rewiews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          rewiews.map((rewiew) => (
            <OfferRewiew key={rewiew.id} rewiew={rewiew}/>
          ))
        }
      </ul>
      <OfferRewiewForm rewiewFormData={rewiewFormData} setRewiewFormData={setRewiewFormData} />
    </section>
  );
}

export default OfferRewiews;
