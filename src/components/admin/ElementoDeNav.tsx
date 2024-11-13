"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface ElementoDeNavProps {
    icono: string;
    texto: string;
    ruta: string;
    open: boolean;
    hover: boolean;
}

const ElementoDeNav = ({ icono, texto, ruta, open, hover }: ElementoDeNavProps) => {

    // Variable para colorear el inicio del botón de la lista de navegacion
    const [mouseHoverElement, setMouseHoverElement] = useState(false);

    const handleColorElemento = () => {
        setMouseHoverElement(true);
    }

    const handleColorElementoOut = () => {
        setMouseHoverElement(false);
    }

    return(
        <div className="w-full shadow-lg rounded-md ease-out duration-300 hover:translate-x-4" onMouseEnter={handleColorElemento} onMouseLeave={handleColorElementoOut}>
            <Link href={ruta} className="flex h-full">
                <div className={`w-4 h-full ${mouseHoverElement ? "bg-[#FFB602]" : "bg-[#000000]"} rounded-sm`}></div>
                <div className={`flex items-center p-2 flex-1`}>
                    <Image src={icono} alt="Inicio" width={30} height={30} quality={100} priority/>
                    <motion.div className="overflow-hidden flex-1"
                    initial={{
                        width: 0,
                    }} variants={{
                        abierto: {
                            width: "auto",
                            height: "auto",
                        },
                        cerrado: {
                            width: 0,
                        }
                    }} animate={open ? "abierto" : hover ? "abierto" : "cerrado"}>
                        <h3 className="whitespace-nowrap ml-4">{texto}</h3>
                    </motion.div>
                </div>
            </Link>
        </div>
    )
}

export default ElementoDeNav;