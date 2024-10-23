import Banner from "../components/contacto/banner"
import Banner_preguntas from "../components/contacto/banner_preguntas"
import Formulario from "../components/contacto/formulario"
import FondoIconos from "../components/items/banner"
import ElementoPerrito from "../components/contacto/elementoPerrito"
import "./../globals.css";

export default function Contacto() {
    
    return(
        <>
            <Banner />
            <div className="animationScroll">
                <Banner_preguntas />
            </div>

            <div className="animationScroll">
                <FondoIconos>
                    <Formulario />
                </FondoIconos>
            </div>

            <div className="animationScroll">
                <ElementoPerrito/>
            </div>
        </>
    )
}