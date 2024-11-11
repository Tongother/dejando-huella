// Importaciones de React y Next
import Image from "next/image";

const Slider: React.FC = () => {
  const images: string[] = ["/adopcion/no_imagen.png", "/adopcion/no_imagen.png", "/adopcion/no_imagen.png", "/adopcion/no_imagen.png" ];

  return (
    <section className="mt-4">
      <div className="relative flex justify-center md:h-screen">
        <div className="relative flex md:gap-1 w-full overflow-auto snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            <div className="hidden md:block w-[31.5%] snap-center shrink-0"></div>
            {images.map((img, index) => (
                <figure className="flex items-center snap-center shrink-0" key={index}>
                    <Image 
                        src={img}
                        width={900}
                        height={900}
                        alt="Imagen carrusel"
                        className="w-screen h-auto md:w-full md:h-[90%] object-cover"
                        quality={100}
                        priority
                    />
                </figure>
            ))}
            <div className="hidden md:block w-[30%] snap-center shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;