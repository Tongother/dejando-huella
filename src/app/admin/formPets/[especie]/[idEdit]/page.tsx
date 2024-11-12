import FormPets from "@/components/formPets/FormPets";
import axios from "axios";


interface initialDataProps {
	id: number ,
	especie: string ,
	nombre: string,
	edad: number,
	id_sexo: number,
	id_personalidad: number,
	id_tamano?: number,
	adoptado: boolean,
	imagen?: string,
}

export default async function FormPetsPage({ params }: { params: { especie: string; idEdit?: string } }) {
  const { especie, idEdit } = params;

  let mascotaData = null;

  const id = idEdit ? Number(idEdit) : null;
  if (id !== 0) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPet/${especie}/${id}`);
      if (res.status === 200) {
        mascotaData = res.data.result[0];
      }
    } catch (error) {
      console.error("Error al obtener datos de la mascota");
    }
  }

  const initialData:initialDataProps = {
    id: id??0,
    especie: especie,
    nombre: mascotaData?.nombre ?? "",
    edad: mascotaData?.edad ?? 0,
    id_sexo: mascotaData?.id_sexo ?? 0,
    id_personalidad: mascotaData?.id_personalidad ?? 0,
    id_tamano: mascotaData?.id_tamano ?? 0,
    adoptado: mascotaData?.adoptado ?? false,
    imagen: mascotaData?.imagen ?? "",
  };

  return (
    <div className="w-screen h-auto flex justify-center items-center p-20">
      <FormPets idEdit={id} especie={especie} initialData={initialData} />
    </div>
  );
}
