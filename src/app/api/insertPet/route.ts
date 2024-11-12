import connectionDb from "../../../../database/config";

export async function POST(req: Request) {
    // Llama a req.json() solo una vez y guarda el resultado en una variable
    const { especie, nombre, edad, id_sexo, id_personalidad, id_tamano, adoptado, imagen } = await req.json();
    const sql = await connectionDb();

    // Insertar datos en la base de datos
    try {
        if (especie === "perros") {
            // Inserción de datos en la tabla perros
            const result = await sql`
                INSERT INTO perros (nombre, edad, id_sexo, id_personalidad, id_tamano, adoptado, imagen) 
                VALUES (${nombre}, ${edad}, ${id_sexo}, ${id_personalidad}, ${id_tamano}, ${adoptado}, ${imagen});
            `;
        } else if (especie === "gatos") {
            // Inserción de datos en la tabla gatos
            const result = await sql`
                INSERT INTO gatos (nombre, edad, id_sexo, id_personalidad, adoptado, imagen) 
                VALUES (${nombre}, ${edad}, ${id_sexo}, ${id_personalidad}, ${adoptado}, ${imagen});
            `;
        }

        return new Response(JSON.stringify({ message: 'Registro exitoso', status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ message: 'Error al insertar datos', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
