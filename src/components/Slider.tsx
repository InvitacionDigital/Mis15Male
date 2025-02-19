import React from 'react';
import { Carousel } from 'flowbite-react';
import foto1 from '/foto1.jpeg';
import foto2 from '/foto2.jpeg';
import foto6 from '/foto6.jpeg';
import foto7 from '/foto7.jpeg';
import foto8 from '/foto8.jpeg';

const Slider = () => {
  return (
    <div className="h-[300px] w-full">
      <Carousel leftControl="." rightControl="." slideInterval={1500}>
        <div className='w-[85%] rounded-lg'>
          <img src={foto1} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto6} alt="..." className=' w-full max-h-[375px] rounded-lg ' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto7} alt="..." className=' w-full max-h-[375px] rounded-lg ' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto2} alt="..." className=' w-full max-h-[375px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg'>
          <img src={foto8} alt="..." className=' w-full max-h-[375px] rounded-lg ' />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
