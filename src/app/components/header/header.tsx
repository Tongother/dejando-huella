"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/logos/logo_morado_naranja.png";

type HeaderProps = {
    componentHeight?: number;
};

export const Header = ({ componentHeight = 400 }: HeaderProps) => {
    const [show, setShow] = useState(true);
    const { scrollY } = useScroll();
    const [isInitial, setIsInitial] = useState(true);
    const [isHover, setIsHover] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 80 && latest < componentHeight) {
            setShow(false);
            setIsInitial(false);
        } else if (latest > componentHeight) {
            setShow(true);
        } else if (latest < componentHeight) {
            setShow(true);
            setIsInitial(true);
        }
    });

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{
                y: show ? 0 : "-100%",
                opacity: !isInitial && !isHover ? 0.8 : 1,

            }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`font-rancho text-[#374193] lg:text-xl w-full bg-white hidden md:flex justify-center z-20 fixed`}
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
    );
};

export default Header;
