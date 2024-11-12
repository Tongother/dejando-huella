"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Identificacion from "./identificacion";
import Filtro from "./filtro";
import sonsin from "../../../public/perritos/sonsin.png";


type Mascota = {
    imagen: string;
    nombre: string;
    edad: string;
    sexo: string;
    personalidad: string;
    tamanio?: string;
};

interface MascotasDisponiblesProps {
    mascotas: Mascota[];
}

export const MascotasDisponibles = ({ mascotas }: MascotasDisponiblesProps) => {
    const [paginaActual, setPaginaActual] = useState<number>(1);
    const [filtros, setFiltros] = useState({
        busqueda: "",
        sexo: "",
        tamanio: "",
        personalidad: "",
        edad: 0,
    });

    const adopcionesRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    const mascotasPorPagina = 9;

    const mascotasFiltradas = mascotas.filter((mascota) => {
        const coincideBusqueda = filtros.busqueda
            ? mascota.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
            mascota.personalidad.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
            mascota.tamanio?.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
            mascota.sexo.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
            mascota.edad.toLowerCase().includes(filtros.busqueda.toLowerCase())
            : true;
        const coincideSexo = filtros.sexo ? mascota.sexo === filtros.sexo : true;

        const coincideTamaño = filtros.tamanio ? mascota.tamanio === filtros.tamanio : true;
        const coincidePersonalidad = filtros.personalidad ? mascota.personalidad === filtros.personalidad : true;
        const coincideEdad = filtros.edad > 0 ? parseInt(mascota.edad) <= filtros.edad : true;
        return coincideBusqueda && coincideSexo && coincideTamaño && coincidePersonalidad && coincideEdad;
    });

    const numeroPaginas = Math.ceil(mascotasFiltradas.length / mascotasPorPagina);
    const indexDeUltimaMascota = paginaActual * mascotasPorPagina;
    const indexDePrimeraMascota = indexDeUltimaMascota - mascotasPorPagina;
    const mascotasActuales = mascotasFiltradas.slice(indexDePrimeraMascota, indexDeUltimaMascota);

    useEffect(() => {
        if (adopcionesRef.current && gridRef.current) {
            if (mascotasActuales.length > 3) {
                gridRef.current.scrollIntoView({ behavior: "smooth" });
            } else {
                adopcionesRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [paginaActual]);

    return (
        <section ref={adopcionesRef} className="md:p-10">
            <Filtro setFiltros={setFiltros} />
            {mascotasActuales.length === 0 ? (
                <div className="flex justify-center items-center flex-col w-full">
                    <p className="text-center text-[#4C62D9] text-3xl font-semibold col-span-3">
                        Ups.. no se encontraron mascotas con los filtros seleccionados 😢
                    </p>
                    <Image src={sonsin.src} alt="perrito triste" width={200} height={200} />
                </div>
            )
                : (
                    <div>
                        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 justify-items-center items-center lg:mt-10">
                            {mascotasActuales.map((mascota, index: number) => (
                                <Identificacion
                                    mascota={mascota}
                                    botonNaranja={index % 2 === 0 ? false : true}
                                    key={index}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center gap-4 mt-6">
                            {Array.from({ length: numeroPaginas }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setPaginaActual(i + 1)}
                                    className={`${i + 1 === paginaActual ? "bg-[#4C62D9] text-white" : "bg-white text-[#4C62D9]"
                                        } px-4 py-2 rounded-lg`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
        </section>
    );
};

export default MascotasDisponibles;
