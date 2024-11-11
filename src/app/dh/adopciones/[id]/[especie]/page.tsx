import Historia from "@/components/adopciones/Historia";
import Perfil from "@/components/adopciones/Perfil";
import Slider from "@/components/adopciones/slider";

const PerfilAdopcion = async({ params }: { params: { id: number, especie: number } }) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/identificacion/${params.id}/${params.especie}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const datos = (await res.json()).result[0];

    return(
        <div className="font-ini">
            <Perfil datos={datos}/>
            <Slider />
            <Historia historia={datos.historia}/>
        </div>
    )
}

export default PerfilAdopcion;