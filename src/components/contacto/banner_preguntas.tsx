import Banner_pregunta from "./banner_pregunta";

const Banner_preguntas = () => {
    return(
        <section className="w-full pt-4 mb-4 font-rancho">
            <h2 className="text-4xl md:text-5xl text-center text-[#FFB602] mb-4">Preguntas frecuentes</h2>
            <div className="flex flex-col items-center gap-4">
                <Banner_pregunta pregunta="¿Cómo puedo ser voluntario?" respuesta="Para ser voluntario en nuestra fundación de perritos, solo necesitas amor por los animales y un corazón dispuesto a ayudar. Nos encantaría contar con personas comprometidas que puedan dedicar un poco de su tiempo a tareas como cuidar a los perritos, ayudarlos a socializar, pasearlos y colaborar en actividades de limpieza y alimentación. También necesitamos manos para eventos de adopción, recolección de donaciones, y campañas de concientización. Solo contáctanos para una pequeña charla inicial y te orientaremos sobre cómo unirte al equipo. ¡Con tu ayuda, podremos seguir brindándoles a nuestros peludos amigos el cariño y el hogar temporal que necesitan!"/>
                <Banner_pregunta pregunta="¿Qué requisitos tengo que tener para ser adoptante?" respuesta="Si"/>
                <Banner_pregunta pregunta="¿Cómo puedo apoyar a la fundación?" respuesta="Si"/>
            </div>
        </section>
    )
}

export default Banner_preguntas;