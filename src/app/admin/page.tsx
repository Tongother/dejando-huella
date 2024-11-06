// import { cookies } from "next/headers";
// import FormLocalStorage from "../components/FormLocalStorage"
import { FormularioPerros } from "../components/admin/Formulario";
import Lista from "../components/admin/Lista";
export default async function Admin() {
    // const HandleCookie = await cookies()
    // const userCookie = HandleCookie.get('userToken');
    // const username = userCookie?.value
    const response = await fetch('http://localhost:3000/api/mascotas');
    const data = await response.json();
    const mascotas = data;

    return (
        <div>
            <Lista pets={mascotas as any} />
            <FormularioPerros />
        </div>
    )
}
