import BannerAdopciones from "@/components/adopciones/banner_adopciones";
import HogarTemporal from "@/components/adopciones/hogar_temporal";
import MascotasDisponibles from "@/components/adopciones/mascotas_disponibles";
import { Mascota } from "@/app/interfaces/mascota";
import { Suspense } from "react";
import Image from "next/image";

const SkeletonLoader = () => {
    return (
        <div className="w-full h-screen md:h-[90vh] flex justify-center items-center">
            <Image src="/gifts/perrito.gif" width={50} height={50} alt="Cargando..." quality={100} />
        </div>
    );
}
  

export default async function Perritos() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
        cache: "no-store",
    });
    const mascotas: Mascota[] = await res.json();

    return (
        <>
            <Suspense fallback={<SkeletonLoader />} >
                <BannerAdopciones tipo="perritos" />
                <MascotasDisponibles mascotas={mascotas} especie={1} />
                <HogarTemporal />
            </Suspense>
        </>
    );
}
