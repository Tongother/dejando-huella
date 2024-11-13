import Link from "next/link";
import Image from "next/image";

type componente = {
    imagen: string,
    titulo: string,
    descripcion: string,
    link: string
}


interface TarjetaComponenteProps {
    componente: componente;
}

export const TarjetaComponente = ({ componente }: TarjetaComponenteProps) => {
    return (
        <Link href={componente.link}>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center w-[500px] h-auto font-rancho transition-transform duration-100 hover:scale-110">
                <Image src={componente.imagen} alt={componente.titulo} width={400} height={400}  className="rounded-xl mb-6" />
                <h3 className="text-xl font-semibold mb-4">{componente.titulo}</h3>
                <p className="text-gray-500 w-2/3">{componente.descripcion}</p>
            </div>
        </Link>
    );
}

export default TarjetaComponente;