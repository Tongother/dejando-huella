import Lista from "@/components/admin/Lista";
import Breadcrumb from "@/components/items/breadcrumb";
export default async function list() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
        cache: "no-store",
    });
    const mascotas = await res.json();

    const rutas = [{ nombre: "Inicio", link: "/admin" }, { nombre: "Gestión de Mascotas", link: "/admin/list" }, { nombre: "Perritos", link: "/admin/list/perritos" }];
    return (
        <div className="w-full max-h-auto flex flex-col items-center justify-center">
            <Breadcrumb rutas={rutas} titulo="Perros" />

            <div className="w-full max-h-auto p-5 flex flex-col justify-center items-center gap-3 rounded-2xl shadow-2xl">
                <Lista pets={mascotas} especie={"perros"} />
            </div>
        </div>
    )
}