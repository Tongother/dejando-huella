import Formularios from "@/components/admin/adopciones/Formularios";
import Breadcrumb from "@/components/items/breadcrumb";
import axios from "axios";


interface initialDataProps {
  id: number,
  especie: string,
  nombre: string,
  edad: number,
  id_sexo: number,
  id_personalidad: number,
  id_tamano?: number,
  adoptado: boolean,
  historia: string,
};

type imagenesInitialDataProps = Array<{
  id_imagen: number,
  url: string,
}>;




export default async function FormEditPage({ params }: { params: { especie: string; idEdit: string } }) {
  const { especie, idEdit } = params;

  let mascotaData = null;
  let imagenesData: imagenesInitialDataProps = [];

  const id = Number(idEdit);
  if (id !== 0) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPets/${especie}/${id}`);
      if (res.status === 200) {
        mascotaData = res.data.result[0];
      }
    } catch (e: unknown) {
      console.error("Error al obtener datos de la mascota: " + e);
    }

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getImages/${especie}/${id}`);
      if (res.status === 200) {
        imagenesData = res.data.result;
      }
    } catch (e: unknown) {
      console.error("Error al obtener datos de la mascota: " + e);
    }
  }

  const initialData: initialDataProps = {
    id: id ?? 0,
    especie: especie,
    nombre: mascotaData?.nombre ?? "",
    edad: mascotaData?.edad ?? 0,
    id_sexo: mascotaData?.id_sexo ?? 0,
    id_personalidad: mascotaData?.id_personalidad ?? 0,
    id_tamano: mascotaData?.id_tamano ?? 0,
    adoptado: mascotaData?.adoptado ?? false,
    historia: mascotaData?.historia ?? "",
  };

  const imagenesInitialData: imagenesInitialDataProps = imagenesData.map((imagen) => {
    return {
      id_imagen: imagen.id_imagen,
      url: imagen.url,
    };
  });



  return (
    <div className="w-full h-auto flex flex-col p-x-20">
      <Breadcrumb rutas={[{ nombre: "Inicio", link: "/admin" }, { nombre: "Gestión de Mascotas", link: "/admin/list" }, { nombre: especie, link: `/admin/list/${especie}` }, { nombre: id ? mascotaData.nombre : "Agregar", link: `/admin/formPets/${especie}/${id}` }]} titulo={id ? "Editar" : "Agregar"} />
      <Formularios id={id} especie={especie} initialData={initialData} mascotaData={mascotaData} imagenesInitialData={imagenesInitialData} />
    </div>
  );
}
