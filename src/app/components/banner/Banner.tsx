import React from 'react';
import Link from 'next/link';
import "./Banner.css";

const Banner = () => {
  return (
    <section className="flex font-ramm flex-col lg:flex-row justify-evenly lg:justify-around  items-center bg-[#4C62D9]  rounded-none text-white w-full h-[300px] lg:h-[150px] box-border">
      <div className="flex flex-col gap-2 text-4xl">
          <h1 className='text-center'>¡Ayúdanos desde cerquita!</h1>
          <p className='text-lg'><a className='text-white underline' href="#">Conoce el proceso de voluntariado</a></p>
      </div>
      <Link href="#" className="btnHover bg-[#FFB602] text-white font-extrabold font-ruby text-center no-underline text-xl rounded-[40px] p-[25px]">Conocer más</Link>
    </section>
  );
};

export default Banner;
