import Image from "next/image";

interface BannerAdopcionesProps {
    tipo: string;
}
export const BannerAdopciones = ({ tipo }: BannerAdopcionesProps) => {
    return (
        <div className="h-auto w-full md:h-72 bg-[#F5F6FF] p-10 md:p-20 flex justify-between relative overflow-hidden">
            <div className="flex flex-col gap-6 md:w-auto w-40">
                <h1 className="font-luckiest text-xl lg:text-4xl text-[#F6A700]">Estos son los {tipo} disponibles</h1>
                <p className="font-inria font-bold text-[#4C62D9] text-xs lg:text-sm">No necesitas palabras para entender su amor, solo un corazón para darle un hogar.</p>
            </div>
            <div className="w-full md:justify-center hidden md:flex">
                <Image className="w-auto" src="/logos/logo_morado_naranja.png" alt="Logo banner" width={200} height={200} />
            </div>

            <div className="absolute -right-5 md:-right-10 md:bottom-0 md:w-[250px] w-[150px] bottom-5 ">
                <Image className="max-h-full w-full" src={tipo == "perritos" ? "/perritos/Ohana.png" : "/gatitos/mickey1.png"} alt="Mascota en el banner" width={250} height={500} quality={100} />
            </div>
        </div>
    );
}

export default BannerAdopciones;