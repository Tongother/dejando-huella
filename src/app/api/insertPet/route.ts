import connectionDb from "../../../../database/config";

export async function POST(req: Request) {
    const { especie,nombre,edad,sexo,personalidad,tamano,adoptado } = await req.json();
    console.log("first from Api/Insert", especie,nombre,edad,sexo,personalidad,tamano,adoptado);
    const sql =  await connectionDb();

    //Probar conexión a la base de datos
    try {
    } catch (error: unknown) {
        return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    //Insertar datos en la base de datos
    try {
        let result;
        if(especie === 1){
            //Inserción de datos en la tabla perros
            result = await sql`INSERT INTO perros (nombre,edad,id_sexo,id_personalidad,id_tamano,adoptado) VALUES (${nombre},${edad},${sexo},${personalidad},${tamano},${adoptado});`;
        }else{
            //Inserción de datos en la tabla gatos
            result = await sql`INSERT INTO gatos (nombre,edad,id_sexo,id_personalidad,adoptado) VALUES (${nombre},${edad},${sexo},${personalidad},${adoptado});`;
            console.log("result", result);
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