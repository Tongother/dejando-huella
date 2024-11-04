import { cookies } from "next/headers"
export default async function Admin () {
    const HandleCookie = await cookies()
    const userCookie = HandleCookie.get('userToken');
    const username = userCookie?.value
    return (
        <div>
            <h1 className="bg-black text-white font-ramm font-extrabold text-7xl h-screen w-full flex items-center text-center">{username? `Nombre del administrador: ${username}` : 'No hay un usuario activo, favor de descomentar el middleware en cuanto terminen de trabajar aquí.'}</h1>
        </div>
    )
}