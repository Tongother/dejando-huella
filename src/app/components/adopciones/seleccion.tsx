import Image from "next/image";
import Link from "next/link";

type BotonSeleccionProps = {
    texto: string;
    color: string;
    link: string;
    imagen: {
        src: string;
        width: number;
        height: number;
    };
};

export const BotonSeleccion = ({ texto, color, link, imagen }: BotonSeleccionProps) => {
    return (
        <Link href={link} className="transform transition-transform duration-300 hover:scale-110">
            <div className="relative flex flex-col items-center h-[250px] overflow-hidden w-[260px] ">
                <Image className="sombra" src={imagen.src} alt={texto} width={imagen.width} height={imagen.height} />
                <button
                    className={` absolute bottom-0 w-full bg-[${color}] text-white text-2xl font-itim py-2 px-6 rounded-[20px] `}
                >
                    {texto}
                </button>
            </div>
        </Link>
    );
};

export default BotonSeleccion;
