import Lista from "@/components/admin/Lista";
import Breadcrumb from "@/components/items/breadcrumb";
export default async function list() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gatos`, {
        cache: "no-store",
    });
    const mascotas = await res.json();

    const rutas = [{ nombre: "Inicio", link: "/admin" }, { nombre: "Gestión de Mascotas", link: "/admin/list" }, { nombre: "Gatitos", link: "/admin/list/gatitos" }];

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <Breadcrumb rutas={rutas} titulo="Gatos" />

            <div className="w-full h-full p-5 flex flex-col justify-center items-center gap-3 rounded-2xl shadow-2xl">
                <Lista pets={mascotas} especie={"gatos"} />
            </div>
        </div>

    )
}