"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../../../public/logos/logo_morado_naranja.png";

type HeaderProps = {
    componentHeight?: number;
};

export const Header = ({ componentHeight = 200 }: HeaderProps) => {
    const [show, setShow] = useState(true);  // Controla la visibilidad del header
    const { scrollY } = useScroll();  // Controla el valor del scroll en el eje Y
    const [lastScrollY, setLastScrollY] = useState(0);  // Almacena el último valor del scroll
    const [isHover, setIsHover] = useState(false);  // Controla si el header está en hover
    const [isInitial, setIsInitial] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest <= 80) {
            setIsInitial(true);
        } else {
            setIsInitial(false);
        }

        if (latest > componentHeight) {
            if (latest < lastScrollY) {

                setShow(true);
            } else {

                setShow(false);
            }
        } else {
            // Si está por encima de los 400px, siempre mostrar el header
            setShow(true);
        }
        // Actualiza el último valor de scroll
        setLastScrollY(latest);
    });

    return (
        <>
            <motion.header
                initial={{ y: 0 }}
                animate={{
                    y: show ? 0 : "-100%",  // Mueve el header fuera de la pantalla si está oculto
                    opacity: !isHover && !isInitial ? 0.8 : 1,  // Ajusta la opacidad según el hover
                }}
                transition={{ type: "tween", duration: 0.3 }}
                className={`font-rancho text-[#374193] lg:text-xl w-full bg-white hidden md:flex justify-center z-40 sticky top-0`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <nav className="w-full">
                    <ul className="flex justify-between items-center space-x-6 px-12">
                        <li></li>
                        <li></li>
                        <li>
                            <Link href="/historias_exito">Historias de éxito</Link>
                        </li>
                        <li>
                            <Link href="/donaciones">Donaciones</Link>
                        </li>
                        <li>
                            <Link href="/adopciones">Adopciones</Link>
                        </li>
                        <li className="mx-6">
                            <Link href="/">
                                <Image src={logo.src} alt="Logo" width={80} height={80} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/eventos">Eventos próximos</Link>
                        </li>
                        <li>
                            <Link href="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link href="/contacto">Contacto</Link>
                        </li>

                        <button className="bg-[#374193] text-white px-4 py-2 rounded-3xl w-32">Ingresar</button>
                    </ul>
                </nav>
            </motion.header>
        </>
    );
};

export default Header;
