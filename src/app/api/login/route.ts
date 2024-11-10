//import { SignJWT } from 'jose';
import { compareSync } from "bcrypt-ts";
import { cookies } from 'next/headers';
import connectionDb from "../../../../database/config";

export async function GET() {
	// const salt = genSaltSync(10);
	// const hash = hashSync("admin1234", salt);
	// console.log(hash);
	return new Response(JSON.stringify({ message: 'Método no permitido', status: 405}), {
		status: 405,
		headers: { 'Content-Type': 'application/json' }
	});	
}

export async function POST(req: Request) {
	const { username, password }: { username: string; password: string } = await req.json();
	//let token = '';
	console.log("first", username, password);
	const sql =  await connectionDb();
	//Conectar a la base de datos
	try {
		const result = await sql`SELECT VERSION()`;
        if(result.count === 0){
            return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', status: 500 }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
	} catch (error: unknown) {
		return new Response(JSON.stringify({ message:'Error al conectar a la base de datos', error, status: 500 }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	//Validar que el cuerpo de la petición esté completo
	if (username === '' || password === '') {
		return new Response(JSON.stringify({ message: 'Petición incompleta', status: 400 }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	//Validar que no haya un inicio de sesión activo
	try {
		const cookies = req.headers.get('cookie');
		if (cookies) {
			const cookiesArray = cookies.split(';');
			for (let i = 0; i < cookiesArray.length; i++) {
				if (cookiesArray[i].includes('userToken')) {
					return new Response(JSON.stringify({ message: 'Ya hay una sesión activa', status: 202 }), {
						status: 202,
						headers: { 'Content-Type': 'application/json' }
					});
				}
			}
		}
	} catch (error: unknown) {
		return new Response(JSON.stringify({ message: 'Error al validar la sesión activa',error, status: 500 }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	//Validar que el usuario exista
	try {
		const result = await sql`SELECT * FROM administradores WHERE LOWER(username) = LOWER(${username});`;
		if (result.length === 0) {
			return new Response(JSON.stringify({ message: 'Usuario no encontrado', status: 404 ,result}), {
				status: 404,
				headers: { 'Content-Type': 'application/json' }
			});
		}
	} catch (error: unknown) {
		await sql.end();
		return new Response(JSON.stringify({ message: 'No se pudo encontrar el usuario',error, status: 500 }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Comparar contraseñas: bcrypt-ts
	try {
		console.log("dasd");
		const result = await sql`SELECT password FROM administradores WHERE username = LOWER(${username});`;
		console.log("eq");
		const truePassword = result[0].password;
		const verifyPassword = compareSync(password, truePassword);
		if (!verifyPassword) {
			return new Response(JSON.stringify({ message: 'Contraseña incorrecta', status: 202 }), {
				status: 202,
				headers: { 'Content-Type': 'application/json' }
			});
		}
	} catch (error: unknown) {
		return new Response(JSON.stringify({ message: 'Error al validar contraseña',error, status: 500 }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}finally{
		await sql.end();
	}

	// Crear token: jose
	// try {
	//     const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
	//     token = await new SignJWT({ username })
	//         .setProtectedHeader({ alg: 'HS256' })
	//         .setIssuedAt()
	//         .setExpirationTime('2h')
	//         .sign(secret);
	// } catch (error: any) {
	// return new Response(JSON.stringify({ message: 'Error al crear token',error, status: 500 }), {
	//     status: 500,
	//     headers: { 'Content-Type': 'application/json' }
	// });
	// }

	// Crear cookie de usuario: next-headers
	try {
		const setCookie = cookies();
		setCookie.set('userToken', username, {
			maxAge: 8 * 60 * 60,
			httpOnly: false,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
		});
	} catch (error: unknown) {
		return new Response(JSON.stringify({ message: 'Error al crear cookie',error, status: 500 }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	//Respuesta final
	return new Response(JSON.stringify({ message: 'Autenticación exitosa', status: 200 }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
}