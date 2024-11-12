"use client"
// Importaciones de React y Next
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Importaciones de Framer Motion
import { motion } from "framer-motion";
import Link from "next/link";

interface CarruselProps {
  activeIndex: number;
}

interface objeto {
  texto: string;
  urlBtn1: string;
  urlBtn2: string;
  textoBtn1: string;
  textoBtn2: string;
  images: string;
  fondo: boolean;
  color?: string;
}

const Carrusel = ({ activeIndex }:CarruselProps) => {

  let objetoSimulaBD: objeto[] = [
    {texto: "Adopta y ayuda a seguir <br className='hidden lg:block'/><span className='text-[#FFB602]'>dejando huella</span> en la<br className='hidden lg:block'/> vida de un perrito sin <br className='hidden lg:block' />  hogar.", urlBtn1:"/dh/adopciones" , urlBtn2:"/dh/contacto" , textoBtn1:"Adopta" , textoBtn2:"Contactanos" , images: "/breadcrumb_1.png", fondo: false},
    {texto: "", urlBtn1:"" , urlBtn2:"" , textoBtn1:"" , textoBtn2:"" , images: "/banner.png", fondo: false},
    {texto: "¡Estamos aquí para ayudarte a encontrar tu compañero de vida! <br/>Si tienes alguna pregunta o quieres saber más sobre nuestro trabajo, no dudes en escribirnos.", urlBtn1:"/dh/adopciones" , urlBtn2:"/dh/donaciones" , textoBtn1:"Adoptar" , textoBtn2:"Donar" , images: "/contacto/altar_perritos.jpeg", fondo: true, color: "text-black"},
  ]

  objetoSimulaBD = [
    objetoSimulaBD[activeIndex],
    ...objetoSimulaBD.slice(0, activeIndex),
    ...objetoSimulaBD.slice(activeIndex + 1),
  ];

  console.log(objetoSimulaBD);

  const [tiempoScrollTouch, setTiempoScrollTouch] = useState<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout>();
  const [scrollPos, setScrollPos] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const carruselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleWheel = (e: WheelEvent) => {
      if (carruselRef.current && carruselRef.current.contains(e.target as Node)) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          // Bloquea desplazamiento horizontal
          e.preventDefault();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
      }
    };

    const carrusel = carruselRef.current;
    if (carrusel) {
      carrusel.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown);
    }

    const interval = setInterval(() =>{
      setScrollPos((prev) => prev + 1);
    },4000);

    intervalRef.current = interval

    return () => {
      clearInterval(interval);
      if (carrusel) {
        carrusel.removeEventListener("wheel", handleWheel);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const carrusel = carruselRef.current;
    if(scrollPos > objetoSimulaBD.length - 1) return setScrollPos(0);
    if (carrusel) {
      const width = carrusel.offsetWidth;
      carrusel.scrollTo({
        left: scrollPos * width,
        behavior: "smooth",
      });
    }
  }, [scrollPos, objetoSimulaBD.length]);

  const reiniciarIntervalo = () => {
    const interval = setInterval(() =>{
      setScrollPos((prev) => prev + 1);
    },4000);
  
    intervalRef.current = interval
  }

  const handleTouchEnd = () => {
    setIsTouching(false);
    if(isTouching && tiempoScrollTouch){
      clearTimeout(tiempoScrollTouch);
    }
    setTiempoScrollTouch(setTimeout(() => {
      const carrusel = carruselRef.current;
      
      if (carrusel) {
          const scrollPosition = carrusel.scrollLeft;
          const width = carrusel.offsetWidth;       

          const imageIndex = Math.round(scrollPosition / width);
          
          carrusel.scrollTo({
          left: imageIndex * width,
          behavior: "smooth",
          });
      }
    }, 50));

    reiniciarIntervalo();
  }

  const handleOnScroll = () => {
    const isTablet = window.innerWidth < 1024;
    if(isTablet && !isTouching){
      if(tiempoScrollTouch){
          clearTimeout(tiempoScrollTouch);
      }
      
      setTiempoScrollTouch(setTimeout(() => {
          const carrusel = carruselRef.current;
          
          if (carrusel) {
              const scrollPosition = carrusel.scrollLeft;
              const width = carrusel.offsetWidth;       

              const imageIndex = Math.round(scrollPosition / width);

              carrusel.scrollTo({
              left: imageIndex * width,
              behavior: "smooth",
              });

              setScrollPos(imageIndex);
          }
      }, 50));
    }

  };

  const handleMoveCarrusel = (direction: "left" | "right") => {
    console.log("scrollPos", scrollPos);
    if (direction === "left" && scrollPos === 0){ 
      if(intervalRef.current) clearInterval(intervalRef.current);
      reiniciarIntervalo();
      return setScrollPos(objetoSimulaBD.length - 1);  
    }
    if (direction === "right" && scrollPos === objetoSimulaBD.length - 1) { 
      if(intervalRef.current) clearInterval(intervalRef.current);
      reiniciarIntervalo();
      return setScrollPos(0);
    }
    if(intervalRef.current) clearInterval(intervalRef.current);
    setScrollPos(s => s + (direction === "left" ? -1 : 1));
    reiniciarIntervalo();
  };

  return (
    <section className="relative">
      <motion.div className="hidden lg:flex lg:justify-center lg:items-center absolute h-full right-0 top-0 bg-slate-500 opacity-10 z-30" 
        whileHover={{
          width: 80,
          opacity: 0.3,
          cursor: "pointer"
        }} transition={{ duration: 0.3, ease: "easeInOut" }} onClick={() => handleMoveCarrusel("right")}>
        <Image src="/icons/arrow.png" alt="Imagen carrusel" width={50} height={50} className="rotate-180 z-10" priority/>
      </motion.div>
      <motion.div className="hidden lg:flex lg:justify-center lg:items-center absolute h-full left-0 top-0 bg-slate-500 opacity-10 z-30"
        whileHover={{
          width: 80,
          opacity: 0.3,
          cursor: "pointer"
        }} transition={{ duration: 0.3, ease: "easeInOut" }} onClick={() => handleMoveCarrusel("left")}>
        <Image src="/icons/arrow.png" alt="Imagen carrusel" width={50} height={50} className="z-10" priority/>
      </motion.div>
      <div
        ref={carruselRef}
        className="relative flex overflow-auto w-full h-60 md:h-[400px] lg:h-[600px] xl:h-[700px] font-itim"
        style={{ scrollbarWidth: "none" }}
        onTouchStart={() => {setIsTouching(true);
          if(intervalRef.current){
            clearInterval(intervalRef.current);
          }
        }}
        onTouchEnd={handleTouchEnd}
        onScroll={handleOnScroll}
      >
        {objetoSimulaBD.map((item, index) => (
          <div key={index} className="relative md:flex md:justify-end min-w-full h-auto overflow-visible">
            {item.texto !== "" && (
              <div className="absolute top-0 w-full h-full bg-black opacity-50 z-10 flex justify-center items-center md:hidden lg:hidden" />
            )}
            {item.fondo && (
              <div className="hidden absolute right-0 w-full md:w-[50%] h-full md:flex justify-center items-center bg-white md:opacity-50 sombra z-10"/>
            )}
            <div className="absolute top-0 w-full md:max-w-[20em] lg:max-w-[24em] xl:max-w-[34em] h-full flex flex-col justify-center items-center z-20 md:mr-2 lg:mr-[2.5%] xl:mr-[4%]">
                <h1 className={`h-auto max-w-[15em] md:max-w-max xl:h-[240px] leading-relaxed text-white md:${item.color} text-center text-xl xl:text-3xl`} dangerouslySetInnerHTML={{__html: item.texto || ""}}>
                  
                </h1>
              <div className="w-full flex justify-center gap-10 mt-2">
                {item.textoBtn1 !== "" && (
                  <Link href={item.urlBtn1}>
                    <button className="min-w-32 max-w-32 md:min-w-32 xl:w-44 xl:h-12 bg-[#024BFF] hover:bg-[#0642cd] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full">
                      {item.textoBtn1}
                    </button>
                  </Link>
                )}
                {item.textoBtn2 !== "" && (
                  <Link href={item.urlBtn2} className="">
                    <button className="min-w-32 max-w-32 md:min-w-32 xl:w-44 xl:h-12 bg-[#FFB602] hover:bg-[#ffd61b] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full">
                      {item.textoBtn2}
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <Image 
              key={index}
              src={item.images}
              alt="Imagen carrusel"
              fill
              className="min-w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carrusel;