import TarjetaComponente from "@/components/admin/TarjetaComponente";
import Breadcrumb from "@/components/items/breadcrumb";


export default function List() {
    const rutas = [
        { nombre: "Inicio", link: "/admin" },
        { nombre: "Gestión de mascotas", link: "/admin/list" }
    ];
    return (
        <div className="w-full max-h-auto flex flex-col items-center justify-center">
            <Breadcrumb rutas={rutas} titulo="Mascotas" />


            <div className="w-full h-full flex gap-12 p-8 items-center justify-center mt-20">
                <TarjetaComponente componente={{
                    imagen: "/admin/listaPerros.png",
                    titulo: "Gestión de Perritos",
                    descripcion: "Agrega perritos, actualiza o elimina información sobre los perritos registrados en la base de datos.",
                    link: "/admin/list/perritos"
                }} />

                <TarjetaComponente componente={{
                    imagen: "/admin/listaPerros.png",
                    titulo: "Gestión de Gatitos",
                    descripcion: "Agrega gatitos, actualiza o elimina información sobre los gatitos registrados en la base de datos.",
                    link: "/admin/list/gatitos"
                }} />
            </div>
        </div>
    );
}
