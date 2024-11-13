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
}

export async function PUT(req: Request) {
    try {
        // Extraer datos del cuerpo de la solicitud
        const { id, especie, nombre, edad, id_sexo, id_personalidad, id_tamano, adoptado, imagen }: EditProps = await req.json();
        const sql = await connectionDb();
        // Actualizar registro
        if (especie === 'perros') {
            await sql`
                UPDATE perros 
                SET nombre = ${nombre}, 
                    edad = ${edad}, 
                    id_sexo = ${id_sexo}, 
                    id_personalidad = ${id_personalidad}, 
                    id_tamano = ${id_tamano ?? null}, 
                    adoptado = ${adoptado} ,
                    imagen = ${imagen ?? null}
                WHERE id_perro = ${id}`
        }
        else if (especie === 'gatos') {
            await sql`
                UPDATE gatos 
                SET nombre = ${nombre}, 
                    edad = ${edad}, 
                    id_sexo = ${id_sexo}, 
                    id_personalidad = ${id_personalidad}, 
                    adoptado = ${adoptado},
                    imagen = ${imagen ?? null}
                WHERE id_gato = ${id}`;
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
