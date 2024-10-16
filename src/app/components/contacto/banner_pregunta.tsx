"use client"
// Next y React
import Image from "next/image";
import { useState } from "react";

// frame-motion
import { motion } from "framer-motion";


interface Banner_preguntaProps {
    pregunta: string,
    respuesta: string
}

const Banner_pregunta = ({pregunta, respuesta}:Banner_preguntaProps) => {
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

    return(
        <div className="w-[90%] bg-[#EFEFEF] p-6 rounded-sm cursor-pointer" onClick={() => setMostrarRespuesta(prev => !prev)}>
            <div className="relative flex justify-start items-center">
                <h3>{pregunta}</h3>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 w-[16px] h-[16px]">
                    <Image src="/contacto/mas.png" alt="Más información" quality={100} fill priority/>
                </div>
            </div>
            <motion.div 
            variants={{
                hidden: {height: 0, opacity: 0},
                visible: {height: "auto", opacity: 1},
            }}
            initial="hidden"
            animate={mostrarRespuesta ? "visible" : "hidden"}
            transition={{duration: 0.3, ease: "easeInOut"}}>
                <p>{respuesta}</p>
            </motion.div>
        </div>
    )
}

export default Banner_pregunta;