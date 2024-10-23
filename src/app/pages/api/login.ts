// import mysql from 'mysql2/promise';
import { SignJWT } from 'jose';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { NextApiResponse, NextApiRequest} from 'next';

// const db = mysql.createPool({
//     host: process.env.MYSQL_DATABASE_HOST,
//     user: process.env.MYSQL_DATABASE_USER,
//     password: process.env.MYSQL_DATABASE_PASSWORD,
//     database: process.env.MYSQL_DATABASE_NAME,
//     multipleStatements: true,
// });

export async function createToken(username:string, password:string){
    const payload = {
        username,
        password,
    }
    
    const secret = new TextEncoder().encode('JcGnCa-18-13-08');
    try {
        const tokenAdmin = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('5h')
            .sign(secret);
        return tokenAdmin;
    } catch (error) {
        console.error('Error al crear el JWT:', error);
        return error;
    }
}

export function createCookie(token:any){
    const serializedCookie = serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 5,
        path: '/',
    });
    return serializedCookie;
}

export default async function loginHandler(req :NextApiRequest, res:NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }
    try {
        const { username, password } = req.body;
        const response = await findUser(username, password);
        if (response === 'Usuario no encontrado') {
            return res.status(202).json(response);
        }
        if (response === 'Contraseña incorrecta') {
            return res.status(202).json(response);
        }

        if (response === true) {
            console.log(response)
            const result = await createToken(username, password);
            const cookie = createCookie(result);
            res.setHeader('Set-Cookie', cookie);
            return res
                .status(201)
                .json({ message: 'Usuario autenticado correctamente' });
        }
        if (response.error) {
            return res.status(400).json(response.error);
        }
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const findUser = async (username:string, password:string) => {
    try {
        const [rows] = await db.query(
            'SELECT 1 FROM admin WHERE username = ?; SELECT password_hashed FROM admin WHERE username = ?;',
            [username, username]
        );
        const exists = rows[0].length > 0 ? true : false;
        if (exists) {
            const truePassword = rows[1][0].password_hashed;
            const verifyPassword = await bcrypt.compare(password, truePassword);
            if (verifyPassword) {
                return true;
            } else {
                return 'Contraseña incorrecta';
            }
        } else {
            return 'Usuario no encontrado';
        }
    } catch (error:any) {
        console.error('Error al validar usuario:', error);
        return error.json('Error interno del servidor');
    }
};