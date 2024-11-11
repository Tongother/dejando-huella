import Banner_pregunta from "./banner_pregunta";

const Banner_preguntas = () => {
    return(
        <section className="w-full pt-4 mb-4 font-itim">
            <h2 className="text-4xl md:text-5xl text-center text-[#FFB602] mb-4">Preguntas frecuentes</h2>
            <div className="flex flex-col items-center gap-4">
                <Banner_pregunta pregunta="¿Cómo puedo ser voluntario?" respuesta="Para ser voluntario en nuestra fundación de perritos, solo necesitas amor por los animales y un corazón dispuesto a ayudar. Nos encantaría contar con personas comprometidas que puedan dedicar un poco de su tiempo a tareas como cuidar a los perritos, ayudarlos a socializar, pasearlos y colaborar en actividades de limpieza y alimentación. También necesitamos manos para eventos de adopción, recolección de donaciones, y campañas de concientización. Solo contáctanos para una pequeña charla inicial y te orientaremos sobre cómo unirte al equipo. ¡Con tu ayuda, podremos seguir brindándoles a nuestros peludos amigos el cariño y el hogar temporal que necesitan!"/>
                <Banner_pregunta pregunta="¿Qué requisitos tengo que tener para ser adoptante?" imgURL="/contacto/requisitos.png"/>
                <Banner_pregunta pregunta="¿Cómo puedo apoyar a la fundación?" respuesta="Puedes apoyar nuestra misión de varias maneras. Adoptar es la forma más directa de ayudar, ya que le das un hogar a un animal rescatado y permites que otro ocupe su lugar en el refugio. También puedes hacer donaciones en especie o económicas, que ayudan a cubrir gastos de alimento y cuidados veterinarios. Otra forma de colaborar es mediante el voluntariado, ofreciendo tu tiempo en el cuidado diario o en eventos de adopción. Si no puedes adoptar, considera apadrinar a un animal específico para cubrir sus gastos mientras encuentra un hogar definitivo. Por último, difundir nuestro trabajo en redes sociales y asistir a nuestros eventos nos ayuda a sensibilizar a la comunidad y encontrar más familias para nuestros animales. ¡Gracias por tu apoyo!"/>
            </div>
        </section>
    )
}

export default Banner_preguntas;