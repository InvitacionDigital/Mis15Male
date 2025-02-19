import React from 'react';
import sigaText from '/siga.png';
import microGif from '/microGif.gif';

const Canciones: React.FC = () => {
  return (
    <div className='w-[85%] shadow-3xl rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans mt-12 text-primary'>
      <h4 className="text-2xl text-center mb-2 font-sans tracking-widest font-medium">¡PLAYLIST!</h4>
      <img src={microGif} alt="microGif" className='w-[80px]' />
      <p className='text-lg '>¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</p>
      <a href='https://forms.gle/sSRncQ2gQUBccbke8'
        target='_blank'
        className='mt-6 shadow-3xl rounded-full p-4 bg-primary text-white'>AÑADÍ TU TEMA</a>
    </div>
  );
};

export default Canciones;