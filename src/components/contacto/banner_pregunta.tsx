"use client"
// Next y React
import Image from "next/image";
import { useState } from "react";

// frame-motion
import { motion } from "framer-motion";


interface Banner_preguntaProps {
    pregunta: string,
    respuesta?: string,
    imgURL?: string,
}

const Banner_pregunta = ({pregunta, respuesta, imgURL}:Banner_preguntaProps) => {
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

    return(
        <div className="w-[90%] bg-[#EFEFEF] p-6 rounded-sm cursor-pointer" onClick={() => setMostrarRespuesta(prev => !prev)}>
            <div className="relative flex justify-start items-center">
                <h3 className="text-xl md:text-2xl">{pregunta}</h3>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 w-[16px] h-[16px]">
                    <Image src="/contacto/mas.png" alt="Más información" quality={100} fill priority/>
                </div>
            </div>
            <motion.div 
            variants={{
                hidden: {height: 0, opacity: 0},
                visible: {height: "auto", marginTop: "15px", opacity: 1},
            }}
            initial="hidden"
            animate={mostrarRespuesta ? "visible" : "hidden"}
            transition={{duration: 0.3, ease: "easeInOut"}}>
                <p className="text-lg md:text-xl">{ respuesta ? respuesta : "" }</p>
                { imgURL && (
                    <div className="w-full flex justify-center">
                        <Image src={imgURL} alt="Imagen de referencia" quality={100} width={500} height={500} priority/>
                    </div>
                )}
            </motion.div>
        </div>
    )
}

export default Banner_pregunta;