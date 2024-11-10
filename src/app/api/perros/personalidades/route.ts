import { NextResponse } from 'next/server';
import connectionDb from '../../../../../database/config';

export async function GET() {
    const sql = await connectionDb();
    try {
        const result = await sql`SELECT personalidad FROM personalidades`;
        if (result) {
            console.log(result);
            return NextResponse.json(result);
        }
        else {
            return NextResponse.json({
                message: 'Error en la consulta a la base de datos',
            }, { status: 500 });
        }
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        return NextResponse.json({
            message: 'Error al conectar a la base de datos',
            error,
        }, { status: 500 });
    }finally{
        await sql.end();
    }
}