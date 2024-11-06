import Banner from "@/app/components/contacto/banner"
import Banner_preguntas from "@/app/components/contacto/banner_preguntas"
import Formulario from "@/app/components/contacto/formulario"
import FondoIconos from "@/app/components/items/banner"
import ElementoPerrito from "@/app/components/contacto/elementoPerrito"
import "./../../globals.css";

export default function Contacto() {
    
    return(
        <>
            <Banner />
            <Banner_preguntas />

            <FondoIconos>
                <Formulario />
            </FondoIconos>

            <ElementoPerrito/>
        </>
    )
}