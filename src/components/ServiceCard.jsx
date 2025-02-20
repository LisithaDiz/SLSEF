const ServiceCard = ({ imgURL, label }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 relative z-20 flex flex-col items-center justify-center bg-blue-200 transform transition-transform duration-300 hover:scale-105'>
      <div className='flex items-center justify-center w-48 h-48 rounded-full'>
        <img src={imgURL} alt={label} width={160} height={160} />
      </div>
      <h3 className='mt-5 text-3xl font-bold leading-normal text-center font-palanquin'>
        {label}
      </h3>
    </div>
  );
};

export default ServiceCard;
