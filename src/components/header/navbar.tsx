"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
    const [opacity, setOpacity] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 1) {
            setOpacity(false);
        } else if (latest < 1) {
            setOpacity(true);
        }
    });

    return (
        <motion.header
            initial={{ opacity: 1 }}
            animate={{
                opacity: opacity ? 1 : 0.8,
                backgroundColor: opacity ? "white" : "white",
            }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`md:hidden font-rancho text-[#374193] w-full bg-[#fefefe] flex px-2 justify-center z-50 sticky top-0`}
        >
            <nav className="w-full flex justify-between items-center px-4 z-50">
                    <Link href={'/'} className="flex items-center">
                        <Image src="/logos/logo_morado_naranja.png" alt="Logo" width={40} height={40} priority/>
                    </Link>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        {menuOpen ? (
                            // Icono de cerrar
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#374193" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        ) : (
                            // Icono de menú
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#374193" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 6l16 0" />
                                <path d="M4 12l16 0" />
                                <path d="M4 18l16 0" />
                            </svg>
                        )}
                    </button>
                </nav>

            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: menuOpen ? 1 : 0,
                    height: menuOpen ? "100vh" : 0, // Cubrir toda la pantalla
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full bg-white overflow-hidden"
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-4">
                    <li>
                        <Link href="/dh/historias_exito">Historias de éxito</Link>
                    </li>
                    <li>
                        <Link href="/dh/donaciones">Donaciones</Link>
                    </li>
                    <li>
                        <Link href="/dh/adopciones">Adopciones</Link>
                    </li>
                    <li>
                        <Link href="/dh/eventos">Eventos próximos</Link>
                    </li>
                    <li>
                        <Link href="/dh/nosotros">Nosotros</Link>
                    </li>
                    <li>
                        <Link href="/dh/contacto">Contacto</Link>
                    </li>
                </ul>
            </motion.div>
        
        </ motion.header>
    );
};

export default Navbar;
