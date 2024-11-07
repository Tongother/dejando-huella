"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ElementoDeNav from "./ElementoDeNav";
import "./scrollbar.css"

const NavBarAdmin = () => {
    
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }
    
    const handleDown = () => {
        setHover(true);
    }

    const handleUp = () => {
        setHover(false);
    }

    return(
        <>
            <motion.nav className="hidden md:flex md:flex-col md:h-screen sombra top-0 right-0 sticky bg-[#1e3b76] text-white font-itim"
            initial={{
                width: 70,
            }}
            variants={{
                abierto: {
                    width: 350,
                    height: "auto",
                },
                cerrado: {
                    width: 70,
                }
            }} animate={open ? "abierto" : hover ? "abierto" : "cerrado"} onMouseEnter={handleDown} onMouseLeave={handleUp}>
                <div className={`w-full flex justify-center items-center `}>
                    <Link href="/admin">
                        <Image src="/logos/logo_morado_naranja.png" alt="Logo" width={80} height={80} />
                    </Link>
                    <motion.div initial={{
                        width: 0,
                    }} className="overflow-hidden"
                    variants={{
                        abierto: {
                            width: "200px",
                            height: "auto",
                        },
                        cerrado: {
                            width: 0,
                        }
                    }} animate={open ? "abierto" : hover ? "abierto" : "cerrado"}>
                        <h1 className="text-2xl whitespace-nowrap text-center">Dejando huella</h1>
                    </motion.div>
                </div>
                <hr className="border-[#192a52]"/>
                <div className="flex flex-col items-center mt-4">
                    <Image src="/admin/avatar.png" alt="Logo" width={80} height={80} />
                    <motion.div initial={{
                        width: 0,
                    }} className="overflow-hidden"
                    variants={{
                        abierto: {
                            width: "auto",
                            height: "auto",
                        },
                        cerrado: {
                            width: 0,
                        }
                    }} animate={open ? "abierto" : hover ? "abierto" : "cerrado"}>
                        <h2 className="text-xl whitespace-nowrap">{"Gunther Nettel"}</h2>
                    </motion.div>
                    <motion.div className="mt-2 flex-1" initial={{
                        width: 0,
                        height: 30,
                    }}
                    variants={{
                        abierto: {
                            width: "100%",
                            height: 30,
                        },
                        cerrado: {
                            width: 0,
                            height: 30,
                        }
                    }} animate={open ? "abierto" : hover ? "abierto" : "cerrado"}>
                        <ul className="flex justify-center gap-4">
                            <li className="hover:bg-[#00000020] p-2 rounded-full cursor-pointer" onClick={handleOpen}>
                                {open ? <Image src="/admin/candado_cerrado.png" alt="Candado" width={30} height={30} quality={100} priority/>: 
                                <Image src="/admin/candado_abierto.png" alt="Candado" width={30} height={30} quality={100} priority/>}
                            </li>
                            <li className="hover:bg-[#00000020] p-2 rounded-full cursor-pointer">
                                <Image src="/admin/dia.png" alt="Modo claro" width={30} height={30} quality={100} priority/>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <hr className="border-[#192a52]"/>
                <div className="flex-1 flex flex-col gap-4 mt-6 overflow-y-auto cajaBotones">
                    <ElementoDeNav texto="Inicio" ruta="/admin" icono="/admin/hogar.png" open={open} hover={hover}/>
                    <ElementoDeNav texto="Lista de animalitos" ruta="/admin" icono="/admin/dog.svg" open={open} hover={hover}/>
                </div>
            </motion.nav>
        </>
    )
}

export default NavBarAdmin;