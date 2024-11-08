// Importaciones de React y Next
import Image from "next/image";

const Slider: React.FC = () => {
  const images: string[] = ["/adopcion/gatito_b5.jpeg", "/adopcion/gatito_b2.jpeg", "/adopcion/gatito_b3.jpeg", "/adopcion/gatito_b4.jpeg" ];

  return (
    <section className="mt-4">
      <div className="relative flex justify-center">
        <div className="relative flex md:gap-1 w-full overflow-auto snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            <div className="hidden md:block w-[30%] snap-center shrink-0"></div>
            {images.map((img, index) => (
                <figure className="flex items-center snap-center shrink-0" key={index}>
                    <Image 
                        src={img}
                        width={400}
                        height={300}
                        alt="Imagen carrusel"
                        className="w-screen h-auto md:w-full md:h-[90%] object-cover"
                        priority
                    />
                </figure>
            ))}
            <div className="w-[30%] snap-center shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;