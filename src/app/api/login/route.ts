import { SignJWT } from 'jose';
import { compareSync } from "bcrypt-ts";
import { NextApiResponse, NextApiRequest } from 'next';
import { cookies } from 'next/headers';
// import mysql from 'mysql2/promise';

// Conexión a la base de datos
// const db = mysql.createPool({
//     host: process.env.MYSQL_DATABASE_HOST,
//     user: process.env.MYSQL_DATABASE_USER,
//     password: process.env.MYSQL_DATABASE_PASSWORD,
//     database: process.env.MYSQL_DATABASE_NAME,
//     multipleStatements: true,
// });

export async function GET(request: Request) {
    return new Response('Te encontré esponja', { status: 200 });
}
export async function POST(req: Request) {
    const { username, password } = await req.json();
    let token = '';    
    //Validar que el usuario exista
    try {
        const [rows] = await db.query('SELECT * FROM admin WHERE username = ?;', [username]);
        if (rows.length === 0) {
            return Response.json({ error: 'Usuario no encontrado', status: 404 });
        }
    } catch (error: any) {
        return Response.json({ error: 'No se pudo encontrar el usuario', status: 500 });
    }

    // Comparar contraseñas: bcrypt-ts
    try {
        const [rows] = await db.query('SELECT password FROM admin WHERE username = ?;', [username]);
        const truePassword = rows[0].password;
        const verifyPassword = compareSync(password, truePassword);
        if (!verifyPassword) {
            return Response.json({ message: 'Contraseña incorrecta', status: 202 });
        }
    } catch (error: any) {
        return Response.json({ error: 'Error al validar contraseña', status: 500 });
    }

    // Crear token: jose
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
        token = await new SignJWT({ username })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('2h')
            .sign(secret);
    } catch (error: any) {
        return Response.json({ error: 'Error al crear token', status: 500 });
    }

    // Crear cookie de usuario: next-headers
    try {
        const setCookie = cookies();
        setCookie.set('userToken', token,{
            maxAge: 8 * 60 * 60,
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
    } catch (error: any) {
        return Response.json({ error: 'Error al crear cookie', status: 500 });
    }
    //Respuesta final
    return Response.json({ message: 'Autenticación exitosa', status: 200 });
}