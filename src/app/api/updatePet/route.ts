import connectionDb from "../../../../database/config";

interface EditProps {
    idEdit: number | null,
	id_especie: number | null,
	nombre: string,
	edad: number,
	id_sexo: number,
	id_personalidad: number,
	id_tamano: number | null,
	adoptado: boolean,
}

export async function PUT(req: Request) {
    const {idEdit, id_especie,nombre,edad,id_sexo,id_personalidad,id_tamano,adoptado } : EditProps = await req.json();
    console.log("first from Api/updatePet", idEdit, id_especie,nombre,edad,id_sexo,id_personalidad,id_tamano,adoptado);
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

    //Verificar que exista el registro en la base de datos
    try{
        let result;
        if(id_especie == 1){
            //Consulta de datos en la tabla perros
            result = await sql`SELECT * FROM perros WHERE id_perro = ${idEdit}`;
        }else{
            //Consulta de datos en la tabla gatos
            result = await sql`SELECT * FROM gatos WHERE id_gato = ${idEdit}`;
        }
        if(result.count == 0){
            return new Response(JSON.stringify({ message: 'No se encontró el registro a Editar', status: 404 }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ message: 'Error al buscar el registro a Editar', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    //Actualizar datos en la base de datos
    try {
        let result;
        if(id_especie == 1){
            //Actualización de datos en la tabla perros
            result = await sql`UPDATE perros SET nombre =${nombre}, edad = ${edad}, id_sexo = ${id_sexo}, id_personalidad = ${id_personalidad}, id_tamano = ${id_tamano}, adoptado = ${adoptado} WHERE perros.id_perro = ${idEdit};`;
        }else{
            //Actualización de datos en la tabla gatos
            result = await sql`UPDATE gatos SET nombre =${nombre}, edad = ${edad}, id_sexo = ${id_sexo}, id_personalidad = ${id_personalidad}, adoptado = ${adoptado} WHERE gatos.id_gato = ${idEdit};`;
        }
        return new Response(JSON.stringify({ message: 'Edición exitosa', status: 200 }), {
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