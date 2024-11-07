import Image from "next/image";

interface BannerAdopcionesProps {
    tipo: string;
}
export const BannerAdopciones = ({tipo}:BannerAdopcionesProps) => {
    return (
        <div className="h-auto w-full md:h-72 bg-[#F5F6FF] p-20 flex justify-between relative overflow-hidden">
            <div className="flex flex-col gap-6">
                <h1 className="font-luckiest text-4xl text-[#F6A700]">Estos son los {tipo} disponibles</h1>
                <p className="font-inria font-bold text-[#4C62D9] text-sm">No necesitas palabras para entender su amor, solo un corazón para darle un hogar.</p>
            </div>
            <div className="w-full flex justify-center">
                <Image className="w-auto" src="/public/logos/logo_morado_naranja.png" alt="Logo banner" width={200} height={200} />
            </div>
            <Image className="absolute -right-10 bottom-0 max-h-full" src={tipo == "perritos" ? "/perritos/Ohana.png" : "/gatitos/mickey1.png"} alt="Mascota en el banner" width={250} height={500} />
        </div>
    );
}

export default BannerAdopciones;