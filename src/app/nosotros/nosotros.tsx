import React from 'react';
import Image from 'next/image';

const Nosotros = () => {
    const works = [
        {
            title: 'Adopciones Responsables',
            description: 'Nos comprometemos a encontrar hogares seguros y amorosos para perritos sin hogar, promoviendo adopciones responsables y conscientes.',
            image: '/images/adopciones.jpg',
        },
        {
            title: 'Cuidado Veterinario',
            description: 'Ofrecemos atención médica a perritos rescatados, asegurándonos de que reciban el tratamiento y los cuidados que necesitan.',
            image: '/images/cuidado-veterinario.jpg',
        },
        {
            title: 'Rescate y Rehabilitación',
            description: 'Rescatamos perros en situación vulnerable, brindando rehabilitación física y emocional para ayudarlos a encontrar un hogar definitivo.',
            image: '/images/rescate-rehabilitacion.jpg',
        },
        {
            title: 'Conciencia y Educación',
            description: 'Impulsamos campañas de concientización sobre el cuidado y respeto de los animales, fomentando una cultura de adopción responsable.',
            image: '/images/educacion.jpg',
        },
    ];

    return (
        <div className="w-full flex flex-col items-center gap-12 py-10">
            <article className="w-full flex flex-col md:flex-row justify-center items-center gap-12 py-10">
                <div className="w-80 h-80 relative">
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
                </div>
            </article>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
                {works.map((work, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                        <Image 
                            src={work.image} 
                            alt={work.title} 
                            width={400} 
                            height={250} 
                            className="rounded-md object-cover"
                        />
                        <h3 className="mt-4 text-2xl font-bold text-[#FFB602]">{work.title}</h3>
                        <p className="mt-2 text-gray-600">{work.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Nosotros;

