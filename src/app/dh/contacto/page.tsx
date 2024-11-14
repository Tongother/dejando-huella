import Banner_preguntas from "@/components/contacto/banner_preguntas"
import Formulario from "@/components/contacto/formulario"
import FondoIconos from "@/components/items/banner"
import ElementoPerrito from "@/components/contacto/elementoPerrito"
import "./../../globals.css";
import Carrusel from "@/components/carrusel/Carrusel"
import { Suspense } from "react";
import Image from "next/image";

const SkeletonLoader = () => {
    return (
        <div className="w-full h-screen md:h-[90vh] flex justify-center items-center">
            <Image src="/gifts/perrito.gif" width={50} height={50} alt="Cargando..." quality={100} />
        </div>
    );
}

export default function Contacto() {
    
    return(
        <>
            <Suspense fallback={<SkeletonLoader />}>
                <Carrusel activeIndex={2}/>
                <Banner_preguntas />

                <FondoIconos>
                    <Formulario />
                </FondoIconos>

                <ElementoPerrito/>
            </Suspense>
        </>
    )
}