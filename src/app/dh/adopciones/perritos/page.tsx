import BannerAdopciones from "@/components/adopciones/banner_adopciones";
import HogarTemporal from "@/components/adopciones/hogar_temporal";
import MascotasDisponibles from "@/components/adopciones/mascotas_disponibles";
import { Mascota } from "@/app/interfaces/mascota";

export default async function Perritos() {
    let mascotas: Mascota[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Error al obtener mascotas");
        }

        mascotas = await res.json();

    } catch (error) {
        console.error("Error obteniendo mascotas:", error);
    }

    return (
        <>
            <BannerAdopciones tipo="perritos" />
            <MascotasDisponibles mascotas={mascotas} />
            <HogarTemporal />
        </>
    );
}
