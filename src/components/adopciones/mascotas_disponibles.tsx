"use client"

import { useEffect, useState, useRef } from "react";
import Identificacion from "./identificacion";
import Filtro from "./filtro";

type Mascota = {
    imagen: string;
    nombre: string;
    edad: string;
    sexo: string;
    personalidad: string;
    tamaño: string;
  };
  
  interface MascotasDisponiblesProps {
    mascotas: Mascota[];
  }
  

export const MascotasDisponibles = ({mascotas}: MascotasDisponiblesProps) => {
    const [paginaActual, setPaginaActual] = useState<number>(1);
    const adopcionesRef = useRef<HTMLDivElement | null >(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    
    const mascotasPorPagina = 9;
    const numeroPaginas = Math.ceil(mascotas.length / mascotasPorPagina);
    const indexDeUltimaMascota = paginaActual * mascotasPorPagina;
    const indexDePrimeraMascota = indexDeUltimaMascota - mascotasPorPagina;
    const mascotasActuales = mascotas.slice(indexDePrimeraMascota, indexDeUltimaMascota);
    

    useEffect(() => {
        if (adopcionesRef.current && gridRef.current){
            if (mascotasActuales.length > 3){
                gridRef.current.scrollIntoView({ behavior: "smooth" });
            }
            else{
                adopcionesRef.current.scrollIntoView({behavior: "smooth"})
            }
        }
        
    }, [paginaActual]);

    return (
        <section ref={adopcionesRef}  className="p-10">
            <Filtro />
            <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 justify-items-center items-center">
                {mascotasActuales.map((mascota, index:number) => (
                    <Identificacion mascota={mascota} botonNaranja={(index % 2 == 0) ? false : true} key={index} />
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
        </section>
    );
};

export default MascotasDisponibles;
