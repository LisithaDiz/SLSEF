import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-bold text-center font-palanquin'>
        Contact
        <span className='text-coral-red'> Us for more</span>
        Details
      </h3>


      <div className='flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
