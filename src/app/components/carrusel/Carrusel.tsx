"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import img1 from "@/../public/breadcrumb_1.png";
import arrow from "@/../public/arrow.png";

const Carrusel: React.FC = () => {
  const images: string[] = [img1.src, img1.src, img1.src];
  const [tiempoScroll, setTiempoScroll] = useState<NodeJS.Timeout>();
  const [scrollPos, setScrollPos] = useState(0);
  const carruselRef = useRef<HTMLDivElement>(null);

  const handleTouchEnd = () => {

    if(tiempoScroll){
        clearTimeout(tiempoScroll);
    }
    
    setTiempoScroll(setTimeout(() => {
        const carrusel = carruselRef.current;
        
        if (carrusel) {
            const scrollPosition = carrusel.scrollLeft;
            const width = carrusel.offsetWidth;
            
            carrusel.ontouchstart = () => {
                clearTimeout(tiempoScroll);
                setInterval(() => {
                    clearTimeout(tiempoScroll);
                }, 50);
            };
            

            const imageIndex = Math.round(scrollPosition / width);
            
            carrusel.scrollTo({
            left: imageIndex * width,
            behavior: "smooth",
            });
        }
    }, 50));
  };
  
  useEffect(() => {
    const carrusel = carruselRef.current;
    const width = carrusel?.offsetWidth;

    if(carrusel){
      carrusel.scrollTo({
        left: width ? scrollPos * width : 0,
        behavior: "smooth"
      })
    }
  }, [scrollPos]);

  const handleMoveCarrusel = (direction: "left" | "right") => {
    if (direction === "left" && scrollPos === 0) return setScrollPos(images.length - 1);
    if (direction === "right" && scrollPos === images.length - 1) return setScrollPos(0);
    setScrollPos(scrollPos + (direction === "left" ? -1 : 1));
  };

  return (
    <section className="relative">
      <div className="hidden lg:flex lg:justify-center lg:items-center absolute h-full right-0 top-0 bg-slate-500 opacity-10 z-10 hover:w-32 hover:opacity-50 hover:cursor-pointer duration-1000 ease-out">
        <Image src={arrow.src} alt="Imagen carrusel" width={50} height={50} className="rotate-180 z-10" onClick={() => handleMoveCarrusel("right")}/>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center absolute h-full left-0 top-0 bg-slate-500 opacity-10 z-10">
        <Image src={arrow.src} alt="Imagen carrusel" width={50} height={50} className="z-10" onClick={() => handleMoveCarrusel("left")}/>
      </div>
      <div
        ref={carruselRef}
        className="relative flex overflow-auto w-full h-60 md:h-[400px] lg:h-[600px] xl:h-[700px] font-rancho"
        style={{ scrollbarWidth: "none" }}
        onScroll={handleTouchEnd}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="relative md:flex md:justify-end min-w-full h-auto overflow-visible">
            <div className="absolute top-0 w-full h-full bg-black opacity-50 z-10 flex justify-center items-center md:hidden lg:hidden"></div>
            <div className="absolute top-0 w-full md:max-w-[20em] lg:max-w-[24em] xl:max-w-[34em] h-full flex flex-col justify-center items-center z-20 md:mr-2 lg:mr-[2.5%] xl:mr-[4%]">
              <h1 className="h-auto max-w-[15em] md:max-w-max md:h-[100px] lg:h-[160px] xl:h-[240px] leading-8 lg:leading-10 xl:leading-[1.25em] text-white text-center text-xl lg:text-3xl xl:text-5xl">
                Adopta y ayuda a seguir <br className="hidden lg:block"/><span className="text-[#FFB602]">dejando huella</span> en la<br className="hidden lg:block"/> vida de un perrito sin <br className="hidden lg:block" />  hogar.
              </h1>
              <div className="w-full flex justify-center gap-10 mt-6">
                <button className="md:w-32 xl:w-44 xl:h-12 bg-[#024BFF] hover:bg-[#0642cd] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full">
                  Adopta
                </button>
                <button className="md:w-32 xl:w-44 xl:h-12 bg-[#FFB602] hover:bg-[#ffb702b1] hover:scale-105 ease-out duration-300 text-white py-2 px-4 rounded-full">
                  Visítanos
                </button>
              </div>
            </div>
            {/* Imagen que se desborda */}
            <img src={imgSrc} alt="Imagen carrusel" className="min-w-full h-full"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carrusel;
