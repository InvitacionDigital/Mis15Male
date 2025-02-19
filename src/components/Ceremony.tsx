import React from 'react';
import ceremonyText from '/ceremonia.png';
import party2 from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={party2} alt="party2" className='w-[100px]' />
      <p className='text-lg'><strong>Petra Eventos</strong><br/>Av. Gaspar Campos 2448<br/>Muñiz.<br/>Desde: <strong>21:00 hs</strong> <br/>Hasta: <strong>5:00 hs</strong> </p>
      <a href='https://www.google.com.ar/maps/place/Petra+Eventos/@-34.5573148,-58.7160369,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcbda1f09a1b41:0xd2ad084e246e48c7!8m2!3d-34.5573192!4d-58.713462!16s%2Fg%2F11b6sp4glx?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D'
        target='_blank'
        className='mt-6 shadow-3xl rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
