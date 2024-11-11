import connectionDb from "../../../../../../database/config";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params } : { params: { id: number, especie: number } }) {
    const { id, especie } = params;
    const sql =  await connectionDb();

    try{
        let result;
        if(especie == 1){
            result = await sql`SELECT * FROM vista_perros WHERE id = ${id}`;
        }else{
            result = await sql`SELECT * FROM vista_gatos WHERE id = ${id}`;
        }
        return NextResponse.json({ message: 'Registro encontrado', result, status: 500 }, 
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
    }catch (error: unknown) {
        return NextResponse.json({ message: 'Error al buscar el registro', error, status: 500 }, 
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
    }finally{
        sql.end();
    }
}