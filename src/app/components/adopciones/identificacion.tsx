import Image from "next/image";
import LogoMano from "../../../../public/logos/mano.png";
import QrEjemplo from "../../../../public/ICONS/qr_ejemplo.png";
import FondoCredencial from "../../../../public/fondo_credencial.png";
import Logo_morado_naranja from "../../../../public/logos/logo_morado_naranja.png";

type IdentificacionProps = {
    mascota: {
        imagen: string;
        nombre: string;
        edad: string;
        sexo: string;
        personalidad: string;
        tamaño: string;
    },
    botonNaranja: boolean; 
};

export const Identificacion = ({ mascota, botonNaranja = false }: IdentificacionProps) => {
    return (
        <div className="h-[200px] w-[300px]  md:h-[300px] md:w-[400px] bg-[#F5F6FF] rounded-lg flex p-5 gap-6 relative sombra">
            <Image className="absolute -z-10 rounded-lg" src={FondoCredencial.src} alt="Fondo credencial" fill sizes="380px" />



            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Image className="" src={LogoMano.src} alt="Logo mano" width={30} height={30} />
                    <h1 className="font-luckiest text-[#4c62d9] text-2xl md:text-5xl text-center uppercase">{mascota.nombre}</h1>
                </div>

                <div className="h-[100px] w-[100px] md:w-[200px] md:h-[200px] rounded-lg relative">
                    <Image className="rounded-lg w-full h-full overflow-hidden" src={mascota.imagen} alt="Neon" fill sizes="200px" />
                    <button className={`font-luckiest absolute -bottom-3 left-1/2 transform -translate-x-1/2 ${botonNaranja ? "bg-[#F6A700]" : "bg-[#4C62D9]"} uppercase text-slate-200 px-4 py-2 rounded-lg md:w-3/4 transition-transform duration-100 hover:scale-110`}>
                        Adóptame
                    </button>
                </div>

            </div>
            <div className="flex flex-col justify-end py-3 text-xs md:text-base">

                <p className="font-itim mt-4">
                    <span className="text-[#4c62d9]">EDAD</span>
                    <br />
                    {mascota.edad}
                    <br />
                    <span className="text-[#4c62d9]">SEXO</span>
                    <br />
                    {mascota.sexo}
                    <br />
                    <span className="text-[#4c62d9]">PERSONALIDAD</span>
                    <br />
                    {mascota.personalidad}
                    <br />
                    <span className="text-[#4c62d9]">TAMAÑO</span>
                    <br />
                    {mascota.tamaño}
                </p>
            </div>

            <Image className="absolute bottom-4 right-4" src={Logo_morado_naranja.src} alt="Logo" width={30} height={30} />
            <Image className="absolute top-4 right-4 md:w-[50px] md:h-[50px] w-[30px] h-[30px]" src={QrEjemplo.src} alt="ejemplo qr" width={50} height={50} />

        </div>
    );
};

export default Identificacion;