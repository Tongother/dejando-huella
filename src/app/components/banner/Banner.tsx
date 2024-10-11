import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="flex  flex-col lg:flex-row justify-evenly lg:justify-around  items-center bg-[#4C62D9]  rounded-none text-white w-full h-[300px] lg:h-[150px] box-border">
      <div className="flex flex-col gap-2 text-3xl font-bold items-center">
          <h1 className='text-center'>¡Ayúdanos desde cerquita!</h1>
          <p className='text-lg text-center'><a className='text-white font-bold underline' href="#">Conoce el proceso de voluntariado</a></p>
      </div>
      <Link href="#" className="bg-[#FFB602] text-white text-center no-underline font-bold text-xl lg:ml-8 rounded-[40px] p-[25px]">Conocer más</Link>
    </section>
  );
};

export default Banner;
