"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ElementoDeNav from "./ElementoDeNav";
import "./scrollbar.css";

const NavBarAdmin = () => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleDown = () => {
        setHover(true);
    };

    const handleUp = () => {
        setHover(false);
    };

    return (
        <motion.nav
            className="hidden md:flex md:flex-col md:h-screen sombra top-0 sticky bg-[#6b74c6] text-white font-itim"
            initial={{
                width: 70,
            }}
            variants={{
                abierto: {
                    width: 400,
                    height: "auto",
                },
                cerrado: {
                    width: 80,
                    height: "auto",
                },
            }}
            animate={open ? "abierto" : hover ? "abierto" : "cerrado"}
            onMouseEnter={handleDown}
            onMouseLeave={handleUp}
        >
            <div className="w-full flex justify-center items-center">
                <Link href="/admin">
                    <Image
                        src="/logos/logo_morado_naranja.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Link>
                <motion.div
                    initial={{
                        width: 0,
                    }}
                    className="overflow-hidden"
                    variants={{
                        abierto: {
                            width: "200px",
                            height: "auto",
                        },
                        cerrado: {
                            width: 0,
                        },
                    }}
                    animate={open ? "abierto" : hover ? "abierto" : "cerrado"}
                >
                    <h1 className="text-2xl whitespace-nowrap text-center">
                        Dejando huella
                    </h1>
                </motion.div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <Image src="/admin/avatar.png" alt="Avatar" width={80} height={80} />
                <motion.div
                    initial={{
                        width: 0,
                    }}
                    className="overflow-hidden"
                    variants={{
                        abierto: {
                            width: "auto",
                            height: "auto",
                        },
                        cerrado: {
                            width: 0,
                        },
                    }}
                    animate={open ? "abierto" : hover ? "abierto" : "cerrado"}
                >
                    <h2 className="text-xl whitespace-nowrap">{"Gunther Nettel"}</h2>
                </motion.div>
                <motion.div
                    className="mt-2 flex-1"
                    initial={{
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
                        },
                    }}
                    animate={open ? "abierto" : hover ? "abierto" : "cerrado"}
                >
                    <ul className="flex justify-center gap-4">
                        <li
                            className="hover:bg-[#00000020] p-2 rounded-full cursor-pointer"
                            onClick={handleOpen}
                        >
                            {open ? (
                                <Image
                                    src="/admin/candado_cerrado.png"
                                    alt="Candado"
                                    width={30}
                                    height={30}
                                    quality={100}
                                    priority
                                />
                            ) : (
                                <Image
                                    src="/admin/candado_abierto.png"
                                    alt="Candado"
                                    width={30}
                                    height={30}
                                    quality={100}
                                    priority
                                />
                            )}
                        </li>
                        <li className="hover:bg-[#00000020] p-2 rounded-full cursor-pointer">
                            <Image
                                src="/admin/dia.png"
                                alt="Modo claro"
                                width={30}
                                height={30}
                                quality={100}
                                priority
                            />
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className="flex-1 flex flex-col gap-4 mt-6 overflow-y-auto cajaBotones">
                <ElementoDeNav texto="Inicio" ruta="/admin" icono="/admin/hogar.png" open={open} hover={hover} />
                <ElementoDeNav texto="Lista de animalitos" ruta="/admin/list" icono="/admin/dog.svg" open={open} hover={hover} />
            </div>
            <div className="p-1.5 mx-auto mb-4 rounded-md flex justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                    <path d="M 3 0 C 1.347656 0 0 1.347656 0 3 L 0 47 C 0 48.652344 1.347656 50 3 50 L 37 50 C 38.652344 50 40 48.652344 40 47 L 40 38.15625 C 39.457031 38.625 38.785156 38.90625 38.0625 38.90625 C 37.261719 38.90625 36.503906 38.566406 35.9375 38 C 34.765625 36.828125 34.765625 34.953125 35.9375 33.78125 L 40 29.6875 L 40 28 L 17 28 C 15.347656 28 14 26.652344 14 25 C 14 23.347656 15.347656 22 17 22 L 40 22 L 40 20.3125 L 35.9375 16.21875 C 35.371094 15.652344 35.0625 14.925781 35.0625 14.125 C 35.0625 13.324219 35.371094 12.566406 35.9375 12 C 36.503906 11.433594 37.261719 11.125 38.0625 11.125 C 38.785156 11.125 39.457031 11.375 40 11.84375 L 40 3 C 40 1.347656 38.652344 0 37 0 Z M 38.0625 13.125 C 37.808594 13.125 37.539063 13.210938 37.34375 13.40625 C 36.953125 13.796875 36.953125 14.421875 37.34375 14.8125 L 46.53125 24 L 17 24 C 16.449219 24 16 24.449219 16 25 C 16 25.550781 16.449219 26 17 26 L 46.53125 26 L 37.34375 35.1875 C 36.953125 35.578125 36.953125 36.203125 37.34375 36.59375 C 37.539063 36.789063 37.804688 36.90625 38.0625 36.90625 C 38.320313 36.90625 38.554688 36.789063 38.75 36.59375 L 50.34375 25 L 38.75 13.40625 C 38.554688 13.210938 38.316406 13.125 38.0625 13.125 Z"></path>
                </svg>
            </div>

        </motion.nav>
    );
};

export default NavBarAdmin;
