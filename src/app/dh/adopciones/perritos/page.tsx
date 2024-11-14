import BannerAdopciones from "@/components/adopciones/banner_adopciones";
import HogarTemporal from "@/components/adopciones/hogar_temporal";
import MascotasDisponibles from "@/components/adopciones/mascotas_disponibles";
import { Mascota } from "@/app/interfaces/mascota";
import { Suspense } from "react";

export default async function Perritos() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
        cache: "no-store",
    });
    const mascotas: Mascota[] = await res.json();

    return (
        <>
            <Suspense fallback={<h1 className="bg-black w-screen h-screen">Cargando...</h1>} >
                <BannerAdopciones tipo="perritos" />
                <MascotasDisponibles mascotas={mascotas} especie={1} />
                <HogarTemporal />
            </Suspense>
        </>
    );
}
