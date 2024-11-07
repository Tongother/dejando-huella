import React from 'react';
import Link from 'next/link';
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="hidden lg:flex flex-col lg:flex-row justify-evenly items-center bg-[#4C62D9] rounded-none text-white w-full h-[300px] lg:h-[150px] box-border lg:justify-center lg:gap-20">
        <div className="flex flex-col gap-2 text-4xl font-normal font-ramm">
          <h1 className='text-center'>¡Ayúdanos desde cerquita!</h1>
          <p className='text-lg'><a className='text-white underline'>Conoce el proceso de voluntariado</a></p>
        </div>
        <Link href="/voluntarios" className="btnHover bg-[#FFB602] text-white lg:w-[250px] text-center no-underline font-bold text-xl rounded-[40px] p-[25px] font-ruby">
          Conocer más
        </Link>
      </section>
      <section className="flex lg:hidden flex-col justify-evenly items-center bg-[#4C62D9] rounded-none text-white w-full h-[300px] box-border">
        <div className="flex flex-col gap-2 text-3xl text-center font-normal font-ramm">
          <h1>¡Ayúdanos desde cerquita!</h1>
          <p className='text-base'><a className='text-white underline'>Conoce el proceso de voluntariado</a></p>
        </div>
        <Link href="/voluntarios" className="btnHover bg-[#FFB602] text-white text-center no-underline font-bold text-lg rounded-[40px] px-8 py-3">
          Conocer más
        </Link>
      </section>
    </>
  );
};

export default Banner;
