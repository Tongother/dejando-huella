import Image from "next/image";
import FondoIconos from "../items/banner";

interface PerfilProps {
    datos: {
        id: number,
        nombre: string,
        edad: number,
        sexo: string,
        personalidad: string,
        tamanio?: string,
        imagen: string
    }
}

const Perfil = ({datos}:PerfilProps) => {

    const { id, nombre, edad, sexo, personalidad, tamanio, imagen } = datos;

    return (
        <FondoIconos>
            <section className="flex flex-col justify-center items-center mt-6">
                <h1 className="text-2xl py-4 md:text-3xl font-bold">Mi nombre es <span className="text-[#374193] font-bold">{nombre}</span></h1>
                <article className="relative flex flex-col items-center">
                    <Image src={imagen} alt="Imagen del adoptado" width={300} height={300} className="absolute z-10" />
                    <div className="w-[300px] md:w-[500px] p-6 border border-black bg-white mt-56 rounded-3xl shadow-lg shadow-blue-800 font-bold z-20">
                        <div className="w-full flex justify-center">
                            <div className="w-[60%] -mt-6 p-4 border-x border-b rounded-b-3xl border-black bg-amber-300">
                                <h3 className="text-center">Información</h3>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>ID: <span className="text-gray-500 font-bold">{id}</span></p>
                            <p>Edad: <span className="text-gray-500 font-bold">{edad}</span></p>
                            <p>Sexo: <span className="text-gray-500 font-bold">{sexo}</span></p>
                            {tamanio &&  <p>Tamaño: <span className="text-gray-500 font-bold">{tamanio}</span></p>}
                            <p>Personalidad: <span className="text-gray-500 font-bold">{personalidad}</span></p>
                            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                                <h3>¿Quieres adoptar a <span className="text-[#374193] font-bold">{nombre}</span>?</h3>
                                <button className="md:w-32 xl:w-44 xl:h-12 bg-[#374193] hover:bg-[#3e4fb7] hover:scale-105 ease-out duration-300 text-white text-lg py-2 px-4 rounded-full">Adoptar</button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </FondoIconos>
    )
}

export default Perfil;

// import Image from "next/image";
// import FondoIconos from "../items/banner";

// const Perfil = () => {
//     return (
//         <FondoIconos>
//             <section className="flex flex-col justify-center items-center mt-6">
//                 <h1 className="text-2xl md:text-3xl font-bold">Mi nombre es <span className="text-[#374193] font-bold">{"Churrito"}</span></h1>
//                 <article className="relative flex flex-col items-center">
//                     <Image src="/adopcion/gatito_b.png" alt="Imagen del adoptado" width={300} height={300} className="absolute z-10" />
//                     <div className="w-[300px] md:w-[500px] pb-4 border bg-white border-black mt-56 rounded-3xl shadow-xl font-bold z-20">
//                         <div className="w-full p-4 border-b border-black bg-[#FFB602] rounded-t-3xl">
//                             <h3 className="text-center">Información</h3>
//                         </div>
//                         <div className="mt-4">
//                             <div className="ml-6">
//                                 <p>ID: <span className="text-gray-500 font-bold">{"Churrito"}</span></p>
//                                 <p>Edad: <span className="text-gray-500 font-bold">{"1 año"}</span></p>
//                                 <p>Sexo: <span className="text-gray-500 font-bold">{"Macho"}</span></p>
//                                 <p>Tamaño: <span className="text-gray-500 font-bold">{"3cm"}</span></p>
//                                 <p>Personalidad: <span className="text-gray-500 font-bold">{"Fiestero"}</span></p>
//                             </div>
//                             <div className="flex flex-col items-center justify-center gap-4 mt-4">
//                                 <h3>¿Quieres adoptar a <span className="text-[#374193] font-bold">{"Churrito"}</span>?</h3>
//                                 <button className="md:w-32 xl:w-44 xl:h-12 bg-[#374193] hover:bg-[#3e4fb7] hover:scale-105 ease-out duration-300 text-white text-lg py-2 px-4 rounded-full">Adoptar</button>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </section>
//         </FondoIconos>
//     )
// }

// export default Perfil;