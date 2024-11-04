// Importa la conexión de la base de datos
import connectionDb from '../../../../database/config';
import { SignJWT } from 'jose';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { NextApiResponse, NextApiRequest } from 'next';

// Crear el token JWT
export async function createToken(username: string, password: string): Promise<string | Error> {
    const payload = {
        username,
        password,
    };

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
        return new Error('Error al crear el JWT');
    }
}

// Crear la cookie
export function createCookie(token: string): string {
    return serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 5,
        path: '/',
    });
}

// Endpoint de autenticación
export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }
    try {
        const { username, password } = req.body;
        const response = await findUser(username, password);
        
        if (response === 'Usuario no encontrado') {
            return res.status(202).json({ message: response });
        }
        if (response === 'Contraseña incorrecta') {
            return res.status(202).json({ message: response });
        }

        if (response === true) {
            const token = await createToken(username, password);
            const cookie = createCookie(token as string);
            res.setHeader('Set-Cookie', cookie);
            return res.status(201).json({ message: 'Usuario autenticado correctamente' });
        }

        if (response instanceof Error) {
            return res.status(400).json({ error: response.message });
        }
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Función para validar el usuario en la base de datos
const findUser = async (username: string, password: string): Promise<string | boolean | Error> => {
    try {
        const sql = await connectionDb();  // Conecta a la base de datos
        // Consulta para verificar si el usuario existe y obtener el hash de la contraseña
        const userExists = await sql`
            SELECT 1 FROM admin WHERE username = ${username};
        `;
        
        if (!userExists.count) {
            return 'Usuario no encontrado';
        }

        const passwordData = await sql<{ password_hashed: string }[]>`
            SELECT password_hashed FROM admin WHERE username = ${username};
        `;
        
        if (passwordData.length === 0) {
            return 'Usuario no encontrado';
        }

        const verifyPassword = await bcrypt.compare(password, passwordData[0].password_hashed);
        return verifyPassword ? true : 'Contraseña incorrecta';
    } catch (error) {
        console.error('Error al validar usuario:', error);
        return new Error('Error interno del servidor');
    }
};
