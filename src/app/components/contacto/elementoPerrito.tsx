"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

interface ElementoPerritoProps{
    cantidad: number,
}

const ElementoPerrito = ({cantidad}:ElementoPerritoProps) =>{

    const [cantidadState, setCantidadState] = useState(0);

    useEffect(() => {
        if(window.innerWidth <= 768) setCantidadState(6);
        else if(window.innerWidth > 768 && window.innerWidth < 1440) setCantidadState(8);
        else setCantidadState(cantidad);
    }, [])

    return(
        <section className="hidden md:flex justify-center">
            <div className="flex gap-4">
            {
                Array.from({length: cantidadState}).map((_, index) => (
                    <div className="flex gap-4" key={index}>
                        <Image src="/contacto/huellaAnimal.svg" alt="huella" width={20} height={20} quality={100} className="mt-10"/>
                        <Image src="/contacto/huellaAnimal.svg" alt="huella" width={20} height={20} quality={100} className="mt-5"/>
                        <Image src="/contacto/huellaAnimal.svg" alt="huella" width={20} height={20} quality={100} className="mt-10"/>   
                    </div>
                ))
            }
            </div>
            <Image src="/contacto/walkDog.png" alt="perritos" width={100} height={100}/>
        </section>
    )
}

export default ElementoPerrito;