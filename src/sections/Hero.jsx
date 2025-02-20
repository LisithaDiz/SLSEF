import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe);
  const [currentQuote, setCurrentQuote] = useState(shoes[0].quote);
  const [currentName, setCurrentName] = useState(shoes[0].name);
  const changeBigShoeImage = (newShoeImg, newQuote, newName) => {
    setBigShoeImg(newShoeImg);
    setCurrentQuote(newQuote);
    setCurrentName(newName);
  };
  
  return (
    <section
      id='home'
      className='flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container'
    >
      <div className='relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat'>
          SLSEF 2025
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='inline-block mt-3'>
            Sri Lanka
          </span>
          <br />
          <span className='inline-block mt-3 text-coral-red'>Science</span> and{' '}
          <span className='inline-block mt-3 text-coral-red'>Engineering</span> Fair
        </h1>

        <p className='mt-8 text-4xl leading-10 font-montserrat text-slate-gray mb-14 sm:max-w-sm'>
          Empowering Minds, Shaping Tomorrow
        </p>

        <Button label='Register now' iconURL={arrowRight} />

        <div className='flex flex-wrap items-start justify-start w-full gap-16 mt-20'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex items-center justify-center flex-1 bg-center bg-cover xl:min-h-screen max-xl:py-40 bg-[rgba(97,108,165,0.5)]'>
      <div className="relative">
          <img
            src={bigShoeImg}
            alt='shoe collection'
            width={550}
            height={450}
            className='relative z-10 object-contain'
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-center bg-black bg-opacity-50">
            <p className="mb-2 text-2xl font-bold text-white">{currentName}</p>
            <p className="text-2xl italic font-semibold text-white text-shadow-md">{currentQuote}</p>
            </div>
        </div>

        <div className='flex sm:gap-12 gap-4 absolute -bottom-[5%] sm:left-[15%] max-sm:px-6 justify-center items-center '>
          {shoes.map((shoe, index) => (
            <div key={index} className="flex items-center justify-center ">
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(newShoeImg) => changeBigShoeImage(newShoeImg, shoe.quote, shoe.name)}

                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Hero;
