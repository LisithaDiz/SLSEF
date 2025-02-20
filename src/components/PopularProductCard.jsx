const PopularProductCard = ({ imgURL, name }) => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] object-cover' />
      <h3 className='mt-2 text-2xl font-semibold leading-normal text-center font-palanquin'>
        {name}
      </h3>
    </div>
  );
};

export default PopularProductCard;
