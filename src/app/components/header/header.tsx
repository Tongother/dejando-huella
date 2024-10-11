"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/logo_sin_fondo.png";

type HeaderProps = {
    componentHeight?: number;
};

export const Header = ({ componentHeight = 400 }: HeaderProps ) => {
    const [show, setShow] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 80 && latest < componentHeight) {
            setShow(false);
        } else if (latest > componentHeight) {
            setIsFixed(true);
            setShow(true); 
        } else if (latest < componentHeight) {
            setShow(true);
            setIsFixed(false);

        }
    });

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{
                y: show ? 0 : "-100%",
            }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`font-rancho text-[#374193] text-xl w-full bg-white flex justify-center z-20 ${isFixed ? 'fixed top-0' : 'absolute'}`}
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
                        <Image src={logo.src} alt="Logo" width={80} height={80} />
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
    );
};

export default Header;
