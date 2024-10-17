import Banner from "../components/contacto/banner"
import Banner_preguntas from "../components/contacto/banner_preguntas"
import Formulario from "../components/contacto/formulario"
import FondoIconos from "../components/items/banner"
import ElementoPerrito from "../components/contacto/elementoPerrito"

export default function Contacto() {
    
    return(
        <>
            <Banner />
            <Banner_preguntas />
            <FondoIconos>
                <Formulario />
            </FondoIconos>
            <ElementoPerrito cantidad={12}/>
        </>
    )
}