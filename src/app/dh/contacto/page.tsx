import Banner_preguntas from "@/components/contacto/banner_preguntas"
import Formulario from "@/components/contacto/formulario"
import FondoIconos from "@/components/items/banner"
import ElementoPerrito from "@/components/contacto/elementoPerrito"
import "./../../globals.css";
import Carrusel from "@/components/carrusel/Carrusel"

export default function Contacto() {
    
    return(
        <>
            <Carrusel activeIndex={2}/>
            <Banner_preguntas />

            <FondoIconos>
                <Formulario />
            </FondoIconos>

            <ElementoPerrito/>
        </>
    )
}