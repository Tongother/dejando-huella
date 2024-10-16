import React from 'react';
import Link from 'next/link';

const Banner2 = () => {
  return (
    <>
        <section className="hidden lg:flex flex-col lg:flex-row justify-evenly lg:justify-around  items-center bg-[#0099FF]  rounded-none text-white w-full h-[300px] lg:h-[150px] box-border">
            <Link href="#" className="bg-[#FFB602] text-white text-center no-underline font-bold text-xl lg:ml-8 rounded-[40px] p-[25px]">Contactanos</Link>
            <div className="flex flex-col gap-2 text-3xl font-bold items-center">
                <h1 className='text-center'>¿Quieres más información?</h1>
                <p className='text-lg text-center'><a className='text-white font-bold underline' href="#">¡Comunícate con nosotros!</a></p>
            </div>
        </section>

        <section className="flex lg:hidden flex-col lg:flex-row justify-evenly lg:justify-around  items-center bg-[#0099FF]  rounded-none text-white w-full h-[300px] lg:h-[150px] box-border">
            <div className="flex flex-col gap-2 text-3xl font-bold items-center">
                <h1 className='text-center'>¿Quieres más información?</h1>
                <p className='text-lg text-center'><a className='text-white font-bold underline' href="#">¡Comunícate con nosotros!</a></p>
            </div>
            <Link href="#" className="bg-[#FFB602] text-white text-center no-underline font-bold text-xl lg:ml-8 rounded-[40px] p-[25px]">Contactanos</Link>
        </section>
    </>
  );
};

export default Banner2;