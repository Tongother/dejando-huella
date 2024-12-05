'use client';

import FormEditPets from "./FormEditPets";
import FormImagenes from "./FormImagenes";

interface FormulariosProps {
    id: number,
    especie: string,
    initialData: {
        id: number,
        especie: string,
        nombre: string,
        edad: number,
        id_sexo: number,
        id_personalidad: number,
        id_tamano?: number,
        adoptado: boolean,
        historia?: string,
    },
    mascotaData: {
        imagen_principal: string,
        imagen_historia: string,
    },
    imagenesInitialData: Array<{
        id_imagen: number,
        url: string,
    }>,
};


export const Formularios = ({ id, especie, initialData, mascotaData, imagenesInitialData }: FormulariosProps) => {
    return (
        <div className="flex gap-4 items-start">
            <FormEditPets idEdit={id} especie={especie} initialData={initialData} />
            <FormImagenes imagenPrincipal={mascotaData?.imagen_principal || ""} imagenHistoria={mascotaData?.imagen_historia || ""} idEdit={id} initialData={imagenesInitialData} especie={especie} />
        </div>
    )
}

export default Formularios;