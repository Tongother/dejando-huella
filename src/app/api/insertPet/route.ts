import connectionDb from "../../../../database/config";

export async function POST(req: Request) {
    const { datosTexto, imagenPrincipal, imagenHistoria} = await req.json();
    const sql = await connectionDb();
    console.log('Datos en la api', datosTexto, imagenPrincipal, imagenHistoria);

    try {
        if (datosTexto.especie == 'perros') {
        const [newPerro] = await sql`
                INSERT INTO perros (nombre, edad, id_sexo, id_personalidad, id_tamano, adoptado, imagen_principal, imagen_historia, historia)
                VALUES (${datosTexto.nombre}, ${datosTexto.edad}, ${datosTexto.id_sexo}, ${datosTexto.id_personalidad}, ${datosTexto.id_tamano}, ${datosTexto.adoptado}, ${imagenPrincipal}, ${imagenHistoria}, ${datosTexto.historia})
                RETURNING id_perro;
            `;

        const idPerro = newPerro.id_perro;
        sql.end();
        return new Response(JSON.stringify(idPerro), { status: 200 });
        }
        else if (datosTexto.especie == 'gatos') {
        const [newGato] = await sql`
                INSERT INTO gatos (nombre, edad, id_sexo, id_personalidad, adoptado, imagen_principal, imagen_historia, historia)
                VALUES (${datosTexto.nombre}, ${datosTexto.edad}, ${datosTexto.id_sexo}, ${datosTexto.id_personalidad}, ${datosTexto.adoptado}, ${imagenPrincipal}, ${imagenHistoria}, ${datosTexto.historia})
                RETURNING id_gato;
            `;
        const idGato = newGato.id_gato;
        sql.end();
        return new Response(JSON.stringify(idGato), { status: 200 });
        }
    } catch (error) {
        sql.end();
        console.error(error);
        return new Response(JSON.stringify({ message: "Error al guardar los datos", error }), { status: 500 });
    }
}
