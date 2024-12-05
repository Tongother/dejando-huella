import connectionDb from "../../../../../../database/config";

type parametros = {
    params: {
        especie: string;
        id_edit: string;
    }
}

export async function GET(req: Request, { params }: parametros) {
    const { especie, id_edit } = params;

    const sql = await connectionDb();

    try {
        let result;
        if (especie == 'perros') {
            //Consulta de datos en la tabla perros
            result = await sql`SELECT * FROM imagenes_perros WHERE id_perro = ${id_edit}`;
        } else if (especie == 'gatos') {
            //Consulta de datos en la tabla gatos
            result = await sql`SELECT * FROM imagenes_gatos WHERE id_gato = ${id_edit}`;
        }
        sql.end();
        return new Response(JSON.stringify({ message: 'Registro encontrado', result, status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: unknown) {
        sql.end();
        return new Response(JSON.stringify({ message: 'Error al buscar el registro', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}