import React from 'react';
import Link from 'next/link';
import "./Banner2.css";

const Banner2 = () => {
  return (
    <>
        <section className="hidden lg:flex flex-col lg:flex-row justify-evenly items-center bg-[#0099FF] rounded-none text-white w-full h-[300px] lg:h-[150px] box-border lg:justify-center lg:gap-20">
            <Link href="/dh/contacto" className="btnHover bg-[#FFB602] text-white lg:w-[250px] text-center no-underline font-bold text-xl rounded-[40px] p-[25px] font-ruby">Contáctanos</Link>
            <div className="flex flex-col gap-2 text-4xl font-normal font-ramm">
                <h1 className='text-center'>¿Quieres más información?</h1>
                <p className='text-lg'><a className='text-white underline' href="#">¡Comunícate con nosotros!</a></p>
            </div>
        </section>
    </>
  );
};

export default Banner2;