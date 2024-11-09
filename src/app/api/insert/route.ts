import connectionDb from "../../../../database/config";

interface petDataType{
    especie: number,
    nombre: string,
    edad: number,
    sexo: number,
    personalidad: number,
    tamano: number,
    adoptado: boolean,
}

export async function POST(req: Request) {
    const { especie,nombre,edad,sexo,personalidad,tamano,adoptado }: petDataType = await req.json();
    console.log("first", especie,nombre,edad,sexo,personalidad,tamano,adoptado);
    const sql =  await connectionDb();

    //Probar conexión a la base de datos
    try {
    } catch (error: any) {
        return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', error, status: 500 }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    //Validar que el cuerpo de la petición esté correcto
    if (especie === undefined 
        || especie < 1
        || especie > 2
        || nombre === undefined
        || nombre === ''
        || edad === undefined
        || edad < 0
        || edad > 25
        || sexo === undefined 
        || sexo < 1
        || sexo > 2
        || personalidad === undefined
        || personalidad < 1
        || personalidad > 5 
        || tamano < 1
        || tamano > 3 
        || adoptado === undefined) 
    {
        return new Response(JSON.stringify({ message: 'Petición incompleta', status: 400 }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    //Insertar datos en la base de datos
    try {
        let result;
        if(especie === 1){
            //Inserción de datos en la tabla perros
            result = await sql`INSERT INTO perros (nombre,edad,sexo,personalidad,tamano,adoptado) VALUES (${nombre},${edad},${sexo},${personalidad},${tamano},${adoptado});`;
        }else{
            //Inserción de datos en la tabla gatos
            result = await sql`INSERT INTO gatos (nombre,edad,sexo,personalidad,adoptado) VALUES (${nombre},${edad},${sexo},${personalidad},${adoptado});`;
        }
        console.log("result: ", result);
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