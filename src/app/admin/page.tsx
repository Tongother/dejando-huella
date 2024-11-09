import PaginaPrincipal from "@/components/admin/PaginaPrincipal"
export default function Admin () {
    // const HandleCookie = await cookies()
    // const userCookie = HandleCookie.get('userToken');
    // const username = userCookie?.value

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <PaginaPrincipal />
        </div>
    )
}
