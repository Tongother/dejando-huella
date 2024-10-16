import Banner_pregunta from "./banner_pregunta";

const Banner_preguntas = () => {
    return(
        <section className="w-full pt-4">
            <h2 className="text-center mb-4">Preguntas frecuentes</h2>
            <div className="flex flex-col items-center gap-4">
                <Banner_pregunta pregunta="¿Somos reales?" respuesta="No"/>
                <Banner_pregunta pregunta="¿Para cada dy hay?" respuesta="dx"/>
                <Banner_pregunta pregunta="Oh my god" respuesta="OMG"/>
            </div>
        </section>
    )
}

export default Banner_preguntas;