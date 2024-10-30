'use client'

import useIsMobile from '@/app/hooks/useIsMobile';
import Image from 'next/image';

export const FondoIconos = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    const isMobile = useIsMobile();

    return (
        <div className="relative w-full h-auto xl:h-[700px] bg-[#F5F6FF] flex justify-center lg:items-center p-6 md:p-12">

            <div className={isMobile ? 'hidden' : 'block'}>
                <Image
                    key="huellas1"
                    src="/icons/huellas.webp"
                    alt="huellas"
                    className="absolute hidden md:block top-10 left-16 opacity-50"
                    width={65}
                    height={65}
                />
                <Image
                    key="comida"
                    src="/icons/comida.webp"
                    alt="comida"
                    className="absolute hidden md:block top-5 right-5 opacity-50"
                    width={65}
                    height={65}
                />
                <Image
                    key="perro_gato"
                    src="/icons/perro_gato.webp"
                    alt="perro"
                    className="absolute hidden md:block top-1/2 left-10 opacity-50"
                    width={65}
                    height={65}
                />
                <Image
                    key="huella"
                    src="/icons/huella.webp"
                    alt="huella"
                    className="absolute bottom-16 right-[800px] opacity-50"
                    width={65}
                    height={65}
                />
                <Image
                    key="manos"
                    src="/icons/manos.webp"
                    alt="manos"
                    className="absolute hidden md:block md:bottom-20 bottom-96 left-52 rotate-[20deg] opacity-50"
                    width={65}
                    height={65}
                />
                <Image
                    key="logo"
                    src="/logos/logo_morado_naranja.png"
                    alt="logo dejando huella"
                    className="absolute bottom-5 right-5 opacity-50"
                    width={100}
                    height={100}
                />
                <Image
                    key="huellas2"
                    src="/icons/huellas.webp"
                    alt="huellas"
                    className="absolute hidden md:block bottom-40 right-80 opacity-50 rotate-[-20deg]"
                    width={65}
                    height={65}
                />
                <Image
                    key="hueso"
                    src="/icons/hueso.webp"
                    alt="hueso"
                    className="absolute hidden md:block top-20 right-80 opacity-50"
                    width={65}
                    height={65}
                />
            </div>

            {children}
        </div>
    );
}

export default FondoIconos;
