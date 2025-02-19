import React from 'react';
import regaloGif from '/regaloGif.gif'
import Popup from 'reactjs-popup';

const Regalo: React.FC = () => {
  return (
    <div className='mt-12 w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 px-6 text-center font-sans bg-tertiary text-white'>
      <img src={regaloGif} alt="anillogif" className='w-[120px]' />
      <p>El mejor regalo es que vengas,<br/>pero si deseás regalarme algo, podés colaborar con mis sueños y anhelos✨<br/><strong>¡Muchas gracias!</strong></p>
      <Popup trigger={<button className='mt-6 shadow-4xl font-semibold rounded-full p-4 bg-primary'>VER INFORMACIÓN</button>} modal>
        <div className="bg-primary w-fit h-fit p-4 text-left rounded-2xl text-xl font-pop shadow-full z-50 text-white">
        <p className="my-6 text-6xl font-normal text-center font-dance">Mis 15 Valen</p>
          <img src={regaloGif} alt="anillogif" className='w-[120px] mx-auto mb-10' />
          
          <p className="my-4">CBU: 0000003100010288640188</p>
          <p className="my-4 mb-8">Alias: sanchez.valenn</p> 
        </div>
      </Popup>
    </div>
  );
};

export default Regalo;
