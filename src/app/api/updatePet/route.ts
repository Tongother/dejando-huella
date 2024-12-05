import connectionDb from "../../../../database/config";

interface EditProps {
    id: number | null;
    especie: string;
    nombre: string;
    edad: number;
    id_sexo: number;
    id_personalidad: number;
    id_tamano?: number | null;
    adoptado: boolean;
    imagen?: string | null;
    historia?: string;
}

export async function PUT(req: Request) {
    try {
        // Extraer datos del cuerpo de la solicitud
        const data: EditProps = await req.json();
        console.log(data);

        const sql = await connectionDb();
        // Actualizar registro
        if (data.especie === 'perros') {
            await sql`
                UPDATE perros 
                SET nombre = ${data.nombre}, 
                    edad = ${data.edad}, 
                    id_sexo = ${data.id_sexo}, 
                    id_personalidad = ${data.id_personalidad}, 
                    id_tamano = ${data.id_tamano ?? null}, 
                    adoptado = ${data.adoptado} ,
                    historia = ${data.historia ?? null}
                WHERE id_perro = ${data.id}`
        }
        else if (data.especie === 'gatos') {
            await sql`
                UPDATE gatos 
                SET nombre = ${data.nombre}, 
                    edad = ${data.edad}, 
                    id_sexo = ${data.id_sexo}, 
                    id_personalidad = ${data.id_personalidad}, 
                    adoptado = ${data.adoptado},
                    imagen = ${data.imagen ?? null},
                    historia = ${data.historia ?? null}
                WHERE id_gato = ${data.id}`;
        }

        return new Response(JSON.stringify({ message: 'Edición exitosa', status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error en la operación', error: error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
