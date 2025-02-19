import React from 'react';
import party from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={party} alt="party" className='w-[100px]' />
      <p className='text-lg'><strong>Momentos</strong><br/>Av. Gaspar Campos 2366<br/>Muñiz.<br/>Desde: <strong>21:00 hs</strong> <br/>Hasta: <strong>5:00 hs</strong> </p>
      <a href='https://maps.app.goo.gl/quMiF6guwLPhQAp86'
        target='_blank'
        className='mt-6 shadow-3xl rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
