import connectionDb from "../../../../../../database/config";

export async function GET(req: Request, { params } : any) {
    const { especie, id_edit } = params;
    
    const sql =  await connectionDb();

    try{
        let result;
        if(especie == 'perros'){
            //Consulta de datos en la tabla perros
            result = await sql`SELECT * FROM perros WHERE id_perro = ${id_edit}`;
        }else if (especie == 'gatos'){
            //Consulta de datos en la tabla gatos
            result = await sql`SELECT * FROM gatos WHERE id_gato = ${id_edit}`;
        }
        if(result?.count === 0){
            sql.end();
            return new Response(JSON.stringify({ message: 'No se encontró el registro a Editar', status: 404 }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        sql.end();
        return new Response(JSON.stringify({ message: 'Registro encontrado', result, status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }catch (error: unknown) {
        sql.end();
        return new Response(JSON.stringify({ message: 'Error al buscar el registro', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}