import Image from 'next/image';
import "./styles.css";
import { Suspense } from 'react';

const SkeletonLoader = () => {
    return (
        <div className="w-full h-screen md:h-[90vh] flex justify-center items-center">
            <Image src="/gifts/gatito.gif" width={30} height={30} alt="Cargando..." quality={100} />
        </div>
    );
}

const PaginaNosotros = () => {
    return (
        <Suspense fallback={<SkeletonLoader/>}>
            <div className="font-ini">
                <article className="w-full flex flex-col md:flex-row justify-center items-center gap-12 py-10 md:m-0">
                    <div className="w-80 h-80 relative md:block">
                        <Image 
                            src="/Perrito.png"  
                            alt="Imagen de un perrito"
                            fill 
                            className="rounded-full object-cover" 
                        />
                    </div>
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#374193]">
                            En el mundo de las adopciones, una inteligente propuesta hizo una gran diferencia:
                        </h2>
                        <p className="mt-4 text-lg italic text-gray-700">
                        &rdquo;En Dejando Huella, creemos que cada mascota merece una segunda oportunidad, un hogar donde pueda ser amado.&rdquo;
                        </p>
                        <p className="mt-2 text-right text-gray-500">- Dejando Huella</p>
                    </div>
                </article>

                    <section className="w-full flex flex-col gap-12 items-center py-10 px-4 lg:px-[100px]">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#374193] text-center md:text-left">
                                    ¿Cuál es nuestro objetivo principal?
                                </h2>
                                <p className="mt-4 text-lg text-gray-700 text-justify">
                                    En Dejando Huella, nuestro objetivo es crear conciencia sobre la adopción, el respeto y la importancia de dar una segunda oportunidad a los animales en situación de calle. Creemos que cada perro y gato merece un hogar lleno de amor y cuidado. Queremos combatir la sobrepoblación de animales callejeros y brindarles una vida digna y feliz.
                                </p>
                            </div>
                            <div className="w-60 h-60 relative"> 
                                <Image 
                                    src="/Perrito2.png"
                                    alt="Perrito"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 lg:gap-36 max-w-6xl lg:max-w-none ">
                            <div className="md:w-1/2 lg:w-[600px]">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#374193] text-center lg:text-center md:text-left">
                                    Nuestra misión
                                </h2>
                                <p className="mt-4 text-lg text-gray-700 text-justify">
                                    Queremos desafiar la idea de que solo los perros o gatos de raza tienen valor. Nos dedicamos a promover la adopción de animales mestizos, mostrándoles en su mejor versión para que el amor por ellos crezca desde el primer encuentro. Cada adopción es un acto de amor que transforma vidas, tanto la del animal como la de su nueva familia.
                                </p>
                            </div>
                            <div className="w-60 h-60 relative flex justify-center items-center">
                                <Image 
                                    src="/Gatito1.png" 
                                    alt="Gatito"
                                    fill
                                    className="object-cover rounded-lg" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#374193] text-center lg:text-center md:text-left">
                                    Nuestra vision
                                </h2>
                                <p className="mt-4 text-lg text-gray-700 text-justify">
                                    En Dejando Huella, nuestro objetivo es crear conciencia sobre la adopción, el respeto y la importancia de dar una segunda oportunidad a los animales en situación de calle. Creemos que cada perro y gato merece un hogar lleno de amor y cuidado. Queremos combatir la sobrepoblación de animales callejeros y brindarles una vida digna y feliz.
                                </p>
                            </div>
                            <div className="w-60 h-60 relative"> 
                                <Image 
                                    src="/PerroL.png"
                                    alt="Perrito"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div> 
                    </section>
                    <div className="flex flex-col max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
                        <h2 className="text-3xl font-extrabold text-[#374193] text-center">La Historia de Dejando Huella</h2>
                        <p className="mt-4 text-lg text-gray-500 text-justify">
                            En el invierno del 2010, una noche particularmente fría, Tania, una joven amante de los animales, encontró a un perro herido y abandonado a la orilla de un camino en las afueras de la ciudad. Era un mestizo de ojos tristes y cuerpo tembloroso, apenas respiraba. Sofía, sin pensarlo dos veces, lo recogió, lo envolvió en su abrigo y corrió al veterinario más cercano. Esa noche, a pesar de los esfuerzos, el perro no sobrevivió. Su corazón estaba demasiado cansado por el abandono y el frío. <br />
                            <br />
                            Ese trágico momento cambió la vida de Tania para siempre. La impotencia y el dolor de no haber llegado a tiempo encendieron en ella una determinación inquebrantable: no permitir que más animales sufrieran el mismo destino. Así nació &rdquo;Dejando Huella&rdquo;. <br />
                            <br />
                            Con apenas unos ahorros y la ayuda de unos cuantos amigos, Sofía empezó a rescatar animales callejeros, brindándoles cuidado, refugio y, lo más importante, una segunda oportunidad para encontrar el amor de una familia. Los primeros años fueron duros. Las deudas se acumulaban y muchas noches Sofía se preguntaba si podría seguir adelante. Pero cada adopción, cada perro o gato que encontraba un hogar, le daba la fuerza para continuar. <br />
                            <br />
                            Hoy, Dejando Huella ha crecido, pero su esencia sigue siendo la misma. Lo que empezó como un acto de desesperación y dolor, se ha convertido en una organización que ha cambiado miles de vidas, tanto de animales como de las personas que deciden adoptarlos. Cada perro y gato que pasa por nuestras puertas lleva consigo la memoria de aquel mestizo que no pudo salvarse, pero cuya huella inspiró algo mucho más grande.
                        </p>
                    </div>
                    <section className="flex flex-wrap justify-center items-center py-10 gap-6">
                        <div className="card">
                            <div className="face front">
                                <Image src="/gatinho.jpeg" alt="Benjamin" className="object-cover w-full h-full" width={500} height={500} />
                                <h3>Benjamin</h3>
                            </div>
                            <div className="face back">
                                <h3>Benjamin</h3>
                                <p>
                                    &rdquo;Rescatado el 10 de febrero de 2024, encontrado bajo la lluvia en el parque central.&rdquo;
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face front">
                                <Image src="/Gatoo.jpeg" alt="Laura" className="object-cover w-full h-full" width={500} height={500} />
                                <h3>Laura</h3>
                            </div>
                            <div className="face back">
                                <h3>Laura</h3>
                                <p>
                                    &rdquo;Laura fue encontrada el 22 de marzo de 2024, muy cerca del río.&rdquo;
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face front">
                                <Image src="/Gat.jpeg" alt="Pablo" className="object-cover w-full h-full" width={500} height={500} />
                                <h3>Pablo</h3>
                            </div>
                            <div className="face back">
                                <h3>Pablo</h3>
                                <p>
                                    &rdquo;Rescatado el 5 de marzo de 2024, fue encontrado debajo de un puente por el río Sabinal.&rdquo;
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face front">
                                <Image src="/ParGatos.jpeg" alt="Gatitos" className="object-cover w-full h-full" width={500} height={500} />
                                <h3>Gatitos</h3>
                            </div>
                            <div className="face back">
                                <h3>Gatitos</h3>
                                <p>
                                    &rdquo;Rescatado el 5 de marzo de 2024, fue encontrado debajo de un puente por el río Sabinal.&rdquo;
                                </p>
                            </div>
                        </div>
                    </section>
            </div>
        </Suspense>
    );
};

export default PaginaNosotros;


