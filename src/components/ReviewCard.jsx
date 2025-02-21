const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='relative flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] z-10' // Bring image to front
      />
      <p className='z-10 max-w-sm mt-6 text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5 z-10'>
        <p className='text-3xl font-bold font-montserrat text-slate-gray'>{rating}</p>
      </div>
      <h3 className='z-10 mt-1 text-3xl font-bold text-center font-palanquin'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
