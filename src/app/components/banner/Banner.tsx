import React from 'react';
import Link from 'next/link';

const MasInfo = () => {
  return (
    <section className="flex items-center bg-indigo-600 p-32 rounded-none text-white w-full h-48 box-border">
      <div className="m-0 text-3xl font-bold">
        <h1>¡Ayúdanos desde cerquita!</h1>
        <p className='text-lg text-center'><a className='text-white font-bold underline' href="#">Conoce el proceso de voluntariado</a></p>
      </div>
      <Link href="#" className="bg-yellow-600 text-white text-center no-underline font-bold text-xl ml-8">Conocer más</Link>
    </section>
  );
};

export default MasInfo;
