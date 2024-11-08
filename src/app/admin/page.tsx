import PaginaPrincipal from "@/components/admin/PaginaPrincipal"
import FormLocalStorage from "../../components/FormLocalStorage"
export default function Admin () {
    // const HandleCookie = await cookies()
    // const userCookie = HandleCookie.get('userToken');
    // const username = userCookie?.value

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <PaginaPrincipal />
            {/* <Lista pets={mascotas as any} /> */}
            {/* <FormularioPerros /> */}
            <FormLocalStorage id={1}/>
        </div>
    )
}
