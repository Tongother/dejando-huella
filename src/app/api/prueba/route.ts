import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';

export async function GET(req: NextRequest) {
    try {
        const sql = postgres(process.env.DATABASE_URL as string, { 
            ssl: 'require',
        });
        const result = await sql`SELECT 1+1;`;
        if (result) {
            return NextResponse.json({
                message: 'Conexión a la base de datos exitosa',
                result,
            });
        } else {
            return NextResponse.json({
                message: 'Error en la consulta a la base de datos',
            }, { status: 500 });
        }
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        return NextResponse.json({
            message: 'Error al conectar a la base de datos',
            error,
        }, { status: 500 });
    }
}