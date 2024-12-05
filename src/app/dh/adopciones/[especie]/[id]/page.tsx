import Historia from "@/components/adopciones/Historia";
import Perfil from "@/components/adopciones/Perfil";
import Slider from "@/components/adopciones/slider";
import axios from "axios";

const PerfilAdopcion = async ({ params }: { params: { id: number, especie: number } }) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPet/${params.especie}/${params.id}`);
    const datos = await res.data.result[0];


    return (
        <div className="font-ini">
            <Perfil datos={datos} />
            <Slider />
            <Historia historia={datos.historia} />
        </div>
    )
}

export default PerfilAdopcion;