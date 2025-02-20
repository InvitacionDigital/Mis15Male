import React from 'react';
import GoDown from './GoDown';
import over from '/over2.png';
import over2 from '/over3.png';

const Hero: React.FC = () => {
  return (
    <div className='bg-[url("/hero-bg.jpg")] opacity-95 w-full min-w-[300px] max-w-[1000px] aspect-[9/16] bg-contain bg-center bg-no-repeat flex flex-col justify-center py-10 items-center relative '>
      <img src={over} alt='hero' className='absolute top-[20px] right-[0px] w-[200px] object-cover opacity-60 z-10' />
      <img src={over2} alt='hero' className='absolute bottom-[120px] left-[40px] w-[120px] object-cover opacity-60 z-10' />

      <div className='flex items-center gap-2 z-auto '>
        <span className='border-b border-silver w-14 h-0 z-20'></span>
        <p className='font-[poppins] text-dark-silver z-20'>29.03.2025</p>
        <span className='border-b border-silver w-14 h-0 z-20'></span>
      </div>
      <div className='text-7xl text-center w-[205px] relative my-12'>
        <h2 className='text-primary opacity-80 text-[10rem] absolute top-1/2 -translate-y-1/2'>XV</h2>
        <h1 className='z-30 relative font-semibold'>Male</h1>
        <h1 className='text-xl relative '>Mis 15 años</h1>
      </div>
      <span className='border-b border-silver w-44 h-0'></span>

      <GoDown />
    </div>
  );
};

export default Hero;
