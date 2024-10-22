'use client'

import useIsMobile from '@/app/hooks/useIsMobile';
import Image from 'next/image';

export const FondoIconos = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const isMobile = useIsMobile();

    return (
        <div className="relative w-full h-auto bg-[#F5F6FF] flex justify-center p-6 md:p-12">
            {!isMobile && (
                <div>
                    <Image
                        src="/icons/huellas.webp"
                        alt="huellas"
                        className="absolute hidden md:block top-10 left-16 opacity-20"
                        width={65}
                        height={65}
                    />
                    <Image
                        src="/icons/comida.webp"
                        alt="comida"
                        className="absolute hidden md:block top-5 right-5 opacity-20"
                        width={65}
                        height={65}
                    />
                    <Image
                        src="/icons/perro_gato.webp"
                        alt="perro"
                        className="absolute hidden md:block top-1/2 left-10 opacity-20"
                        width={65}
                        height={65}
                    />
                    <Image
                        src="/icons/huella.webp"
                        alt="huella"
                        className="absolute bottom-16 right-[800px] opacity-20"
                        width={65}
                        height={65}
                    />
                    <Image
                        src="/icons/manos.webp"
                        alt="manos"
                        className="absolute hidden md:block md:bottom-20 bottom-96 left-52 rotate-[20deg] opacity-20"
                        width={65}
                        height={65}
                    />
                    <Image
                        src="/logos/logo_morado_naranja.png"
                        alt="logo dejando huella"
                        className="absolute bottom-5 right-5 opacity-20"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/icons/huellas.webp"
                        alt="huellas"
                        className="absolute hidden md:block bottom-40 right-80 opacity-20 rotate-[-20deg]"
                        width={65}
                        height={65}
                    />
                    <Image
                        src="/icons/hueso.webp"
                        alt="hueso"
                        className="absolute hidden md:block top-20 right-80 opacity-20"
                        width={65}
                        height={65}
                    />
                </div>
                )}

            {children}
        </div>

    )
}

export default FondoIconos;