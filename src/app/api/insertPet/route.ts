import connectionDb from "../../../../database/config";

export async function POST(req: Request) {
    let { id_especie,nombre,edad,id_sexo,id_personalidad,id_tamano,adoptado } = await req.json();
    id_especie = parseInt(id_especie);
    console.log("first from Api/Insert", id_especie,nombre,edad,id_sexo,id_personalidad,id_tamano,adoptado);
    const sql =  await connectionDb();

    //Probar conexión a la base de datos
    try {
        let result = await sql`SELECT VERSION()`;
        if(result.count === 0){
            return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', status: 500 }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    //Insertar datos en la base de datos
    try {
        let result;
        if(id_especie === 1){
            //Inserción de datos en la tabla perros
            result = await sql`INSERT INTO perros (nombre,edad,id_sexo,id_personalidad,id_tamano,adoptado) VALUES (${nombre},${edad},${id_sexo},${id_personalidad},${id_tamano},${adoptado});`;
        }else{
            //Inserción de datos en la tabla gatos
            result = await sql`INSERT INTO gatos (nombre,edad,id_sexo,id_personalidad,adoptado) VALUES (${nombre},${edad},${id_sexo},${id_personalidad},${adoptado});`;
        }
        return new Response(JSON.stringify({ message: 'Registro exitoso', status: 200 }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ message: 'Error al insertar datos', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}