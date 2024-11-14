import Image from "next/image";
import "./EnConstruccion.css";
import Link from "next/link";

const EnConstruccion = () => {
    return(
        <section className="w-full h-screen md:h-[90vh] md:flex md:justify-center items-center font-rancho">
            <div className="md:w-[95%] lg:w-[85%] xl:w-[60%] md:p-4 flex flex-col md:flex-row justify-evenly items-center rounded-xl md:shadow-xl md:bg-[#e6edf9]">
                <article className="w-[80%] md:w-[50%] h-[400px] flex justify-center md:justify-start items-center p-4 md:p-0">
                    <div>
                        <h1 className="text-center md:text-start text-5xl md:text-7xl text-[#565dac]">¡Hijole!</h1>
                        <p className="text-4xl md:text-5xl mt-2 text-center md:text-start text-[#565dac]">Esta sección está en construcción</p>
                        <p className="text-center md:text-start text-[#6b74c6] mt-10 md:text-2xl">¡Pero no te desanimes! <br className="md:hidden"/> Muy pronto podras acceder a ella</p>
                        <p className="text-center md:text-start text-[#6e6e6e] mt-1 md:text-lg">¿Necesitas más información? Visita nuestra sección de contacto</p>
                        <div className="flex justify-center md:justify-start mt-2">
                        <Link href="/dh/contacto">
                            <button className="min-w-32 max-w-32 md:min-w-32 xl:w-44 xl:h-12 bg-[#024BFF] hover:bg-[#0642cd] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full z-10 md:text-lg">
                                Contacto
                            </button>
                        </Link>
                        </div>
                    </div>
                </article>
                <article>
                    <Image src="/componentes/construccion.png" alt="En construcción" className="hidden md:block" width={300} height={300} quality={100}/>
                    <Image src="/componentes/construccion.png" alt="En construcción" className="md:hidden -translate-y-12" width={300} height={300} quality={100}/>
                </article>
            </div>
        </section>
    )
}

export default EnConstruccion;