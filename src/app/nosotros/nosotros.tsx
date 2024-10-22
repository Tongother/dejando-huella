import React from 'react';
import Image from 'next/image';

const Nosotros = () => {
    return (
        <section className="w-full flex flex-col md:flex-row justify-center items-center gap-12 py-10">
            <div className="w-80 h-80 relative ">

                <Image 
                    src="/Perrito.png" 
                    alt="Imagen de un perrito"
                    fill 
                    className="rounded-full object-cover" 
                />
            </div>
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#374193]">
                    Cada mascota adoptada es una victoria en nuestra misión de construir un mundo mejor.
                </h2>
                <p className="mt-4 text-lg italic text-gray-700">
                &rdquo;En Dejando Huella, creemos que cada mascota merece una segunda oportunidad, un hogar donde pueda ser amado.&rdquo;
                </p>
                <p className="mt-2 text-right text-gray-500"></p>
            </div>
            
        </section>
    
        
    );
};

export default Nosotros;
