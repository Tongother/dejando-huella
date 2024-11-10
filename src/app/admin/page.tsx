import { cookies } from "next/headers";
import FormPets from "../../components/formPets/FormPets";
import Lista from "@/components/admin/Lista";

export default async function Admin() {
    // const HandleCookie = await cookies
    // const userCookie = HandleCookie.length();
    // const username = userCookie?.value
    return (
        <section className="flex flex-col items-center justify-center flex-auto min-w-screen min-h-screen p-10 gap-10">
            Hola Inicio Admin
        </section>
    )
}
