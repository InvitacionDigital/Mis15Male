import React from 'react';
import gracias from '/gracias.png'

const Gracias: React.FC = () => {
  return (
    <div className='h-fit w-full bg-primary p-8 pt-20 mt-12'>
      <img src={gracias} alt="gracias" className='w-[60%] m-auto' />
      <p className='text-white text-center text-2xl font-bold mt-10'>Tu compañía es importante para el momento, no faltes.</p>
      
    </div>
  );
};

export default Gracias;
