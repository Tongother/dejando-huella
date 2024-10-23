import Image from "next/image";

const Perfil = () => {
    return(
        <section className="flex flex-col justify-center items-center font">
            <h1 className="text-xl">Mi nombre es <span className="text-[#374193]">{}</span></h1>
            <article className="relative flex flex-col items-center">
                <Image src="/adopcion/gatito_b.png" alt="Imagen del adoptado" width={300} height={300} className="absolute -z-10" />
                <div className="w-[300px] p-6 border bg-white mt-56 z-10">
                    <div className="-mt-6 p-4 border-x border-b">
                        <h3 className="text-center">Información</h3>
                    </div>
                    <div className="mt-4">
                        <p>ID: {}</p>
                        <p>Edad: {}</p>
                        <p>Sexo: {}</p>
                        <p>Tamaño: {}</p>
                        <p>Personalidad: {}</p>

                        <div className="flex flex-col items-center justify-center gap-4 mt-4">
                            <h3>¿Quieres adoptar a {}?</h3>
                            <button className="md:w-32 xl:w-44 xl:h-12 bg-[#024BFF] hover:bg-[#0642cd] hover:scale-105 ease-out duration-300 text-white text-xl py-2 px-4 rounded-full">Adoptar</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Perfil;