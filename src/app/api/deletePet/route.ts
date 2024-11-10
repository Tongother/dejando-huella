import connectionDb from "../../../../database/config";

export async function DELETE(req: Request, { params } : any) {
    let sql;
    const {deleteId, especie} = await req.json()
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
            result = await sql`DELETE FROM perros WHERE id_perro = ${deleteId}`;
        }else{
            //Consulta de datos en la tabla gatos
            result = await sql`DELETE FROM gatos WHERE id_gato = ${deleteId}`;
        }
        
        if(result.count!=0){
            return new Response(JSON.stringify({ message: 'Registro eliminado con éxito', result, status: 200 }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        else{
            return new Response(JSON.stringify({ message: 'Error al buscar el registro', status: 500 }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }catch (error: any) {
        sql.end();
        return new Response(JSON.stringify({ message: 'Error al buscar el registro', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }finally{
        sql.end();
    }
}