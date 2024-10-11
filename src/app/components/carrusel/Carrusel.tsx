"use client"
import { useRef, useState } from "react";
import img1 from "@/../public/breadcrumb_1.png";

const Carrusel: React.FC = () => {
  const images: string[] = [img1.src, img1.src, img1.src];
  const [tiempoScroll, setTiempoScroll] = useState<NodeJS.Timeout>();
  const carruselRef = useRef<HTMLDivElement>(null); // Referencia tipada

  const handleTouchEnd = () => {

    if(tiempoScroll){
        clearTimeout(tiempoScroll);
    }
    
    setTiempoScroll(setTimeout(() => {
        const carrusel = carruselRef.current;
        if (carrusel) {
            const scrollPos = carrusel.scrollLeft;
            const width = carrusel.offsetWidth;

            const imageIndex = Math.round(scrollPos / width);
            
            carrusel.scrollTo({
            left: imageIndex * width,
            behavior: "smooth",
            });
        }
    }, 50));
  };

  return (
    <>
      <section
        ref={carruselRef}
        className="flex overflow-auto w-full h-60 md:h-[400px] lg:h-[600px] xl:h-[700px]"
        style={{ scrollbarWidth: "none" }}
        onScroll={handleTouchEnd}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="relative md:flex md:justify-end min-w-full h-auto overflow-visible">
            <div className="absolute top-0 w-full h-full bg-black opacity-50 z-10 flex justify-center items-center md:hidden lg:hidden"></div>
            <div className="absolute top-0 w-full md:max-w-[20em] lg:max-w-[24em] xl:max-w-[34em] h-full flex flex-col justify-center items-center z-20 md:mr-2 lg:mr-[2.5%] xl:mr-[4%]">
              <h1 className="h-auto md:h-[100px] lg:h-[160px] xl:h-[240px] leading-8 lg:leading-10 xl:leading-[1.25em] text-white text-center text-xl lg:text-3xl xl:text-5xl">
                Adopta y ayuda a seguir dejando huella en la <br className="hidden lg:block"/> vida de un perrito sin <br className="hidden lg:block" />  hogar.
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
      </section>
    </>
  );
};

export default Carrusel;
