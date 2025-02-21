import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='relative flex items-center justify-between gap-10 max-container max-lg:flex-col'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold z-10'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-6 sm:border sm:border-slate-gray rounded-full bg-white shadow-lg z-10'>
        <input
          type='text'
          placeholder='subscribe@nike.com'
          className='z-10 input'
        />
        <div className='z-10 flex items-center max-sm:justify-end max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
