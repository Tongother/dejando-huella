import Historia from "@/components/adopciones/Historia";
import Perfil from "@/components/adopciones/Perfil";
import Slider from "@/components/adopciones/slider";

const PerfilAdopcion = ({ params }: { params: { id: string } }) => {
    console.log(params.id);
    return(
        <div className="font-ini">
            <Perfil />
            <Slider />
            <Historia />
        </div>
    )
}

export default PerfilAdopcion;