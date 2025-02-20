const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div 
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
        <p className="text-2xl font-semibold text-center">{imgURL.name}</p>
      </div>
    </div>
  );
};

export default ShoeCard;
