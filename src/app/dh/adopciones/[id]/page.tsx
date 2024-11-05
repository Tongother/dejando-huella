import Historia from "@/app/components/adopciones/Historia";
import Perfil from "@/app/components/adopciones/Perfil";
import Slider from "@/app/components/adopciones/slider";

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