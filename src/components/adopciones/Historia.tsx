import Image from "next/image";

const Historia = ({historia}:{historia: string}) => {
    return(
        <section className="m-4 p-4 border-2 border-black border-dashed rounded-md shadow-2xl">
            <article className="flex gap-4">
                <h2 className="text-xl font-bold mb-2">Historia de adopción</h2>
                <Image src="/adopcion/pet_collar.svg" alt="Icono de collar" width={30} height={30} quality={100} className="pb-2"/>
            </article>
            {historia ? (<p>{historia}</p>) : (
                <p>Se encontraba en un taller muy descuidado, su pelaje lleno de nudos y descuidado, su cuerpo delgado reflejaba su difícil situación. Sin embargo, Hassan decidió tomar el control de su destino. Abandonó el lugar que alguna vez llamó hogar y buscó refugio por sí mismo. Con determinación, encontró su camino hasta el refugio donde el rescatista trabaja, y no le negaron la entrada. Desde entonces, Hassan vive feliz en la entrada, recibiendo a todos con amor y alegría. Su historia es un recordatorio de la resiliencia y la esperanza que se pueden encontrar incluso en las circunstancias más difíciles.</p>
            )}
        </section>
    )
}

export default Historia;