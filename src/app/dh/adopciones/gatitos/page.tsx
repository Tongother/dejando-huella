import BannerAdopciones from "@/components/adopciones/banner_adopciones";
import HogarTemporal from "@/components/adopciones/hogar_temporal";
import MascotasDisponibles from "@/components/adopciones/mascotas_disponibles";
import { Mascota } from "@/app/interfaces/mascota";

export default async function Gatitos() {
    // Lista de mascotas
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gatos`, {
        cache: "no-store",
    });
    const mascotas: Mascota[] = await res.json();

    return (
        <>
            <BannerAdopciones tipo="Gatitos"/>
            <MascotasDisponibles mascotas={mascotas} especie={2} />
            <HogarTemporal />
        </>
    );
}