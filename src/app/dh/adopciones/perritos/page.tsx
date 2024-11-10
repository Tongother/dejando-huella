import BannerAdopciones from "@/components/adopciones/banner_adopciones";
import HogarTemporal from "@/components/adopciones/hogar_temporal";
import MascotasDisponibles from "@/components/adopciones/mascotas_disponibles";
import { Mascota } from "@/app/interfaces/mascota";

export default async function Perritos() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
        cache: "no-store",
    });
    const mascotas: Mascota[] = await res.json();

    return (
        <>
            <BannerAdopciones tipo="perritos" />
            <MascotasDisponibles mascotas={mascotas} />
            <HogarTemporal />
        </>
    );
}
