import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='relative flex items-center justify-between gap-10 max-xl:flex-col-reverse max-container'>
      <div className='relative z-10 flex flex-col flex-1'>
        <h2 className='text-[8rem] font-bold transform font-palanquin'>
          <span className='text-coral-red'>Want to </span>
          Participate?
        </h2>

        <ul className='mt-4 text-lg sm:text-xl md:text-2xl'>
          <li>
            The Junior Inventor of the Year (JIY) competition, organized by the Institution of Engineers, Sri Lanka (IESL), aims to foster innovation among students aged 12 to 19.
          </li>
          <li>
            Similarly, the Science Research Project Competition (SRPC) is conducted by the National Science Foundation (NSF) to promote scientific research among school students.
          </li>
          <li>
            Outstanding projects from these competitions are selected to participate in the Sri Lanka Science and Engineering Fair (SLSEF), a collaborative effort by the Ministry of Education, NSF, Intel EM Limited-Sri Lanka Liaison Office, and IESL.
          </li>
          <li>
            SLSEF serves as a platform to identify and nurture young scientific talent in Sri Lanka.
          </li>
          <li>
            Winners of SLSEF earn the opportunity to represent Sri Lanka at the Intel International Science and Engineering Fair (Intel ISEF), the world's largest pre-college science competition held annually in the USA.
          </li>
          <li>
            This exposure allows Sri Lankan students to showcase their innovations on a global stage, competing with peers worldwide.
          </li>
          <li>
            Over the years, Sri Lankan participants have achieved significant recognition at Intel ISEF, securing various awards and bringing pride to the nation.
          </li>
        </ul>
        <div className='flex flex-wrap gap-4 mt-11'>
          <Button label='Go' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
      <div className='flex-1'>
        <img
          src={shoe8}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
