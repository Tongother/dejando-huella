import Perfil from "@/app/components/adopciones/Perfil";

const PerfilAdopcion = ({ params }: { params: { id: string } }) => {
    console.log(params.id);
    return(
        <div>
            <Perfil />
        </div>
    )
}

export default PerfilAdopcion;