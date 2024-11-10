import connectionDb from "../../../../../../database/config";

export async function GET(req: Request, { params } : any) {
    let sql;
    const { idEdit,especie } = params;
    sql =  await connectionDb();

    //Probar conexión a la base de datos
	try {
        let result = await sql`SELECT VERSION()`;
        if(result.count == 0){
            sql.end();
            return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', status: 500 }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
	} catch (error: any) {
        sql.end();
		return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', error, status: 500 }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

    //validar y retornar el registro en la base de datos
    try{
        let result;
        if(especie == 1){
            //Consulta de datos en la tabla perros
            result = await sql`SELECT * FROM perros WHERE id_perro = ${idEdit}`;
        }else{
            //Consulta de datos en la tabla gatos
            result = await sql`SELECT * FROM gatos WHERE id_gato = ${idEdit}`;
        }
        if(result.count === 0){
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
    }catch (error: any) {
        sql.end();
        return new Response(JSON.stringify({ message: 'Error al buscar el registro', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}