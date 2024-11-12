import Banner from "../../components/banner/Banner";
import Stats from "../../components/stats";
import Banner2 from "../../components/banner2/Banner2";
import Carrusel from "../../components/carrusel/Carrusel";
import Info from "../../components/info";
import Image from  "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed w-full h-full -z-10">
        <Image src={"/fondo_fijo.jpg"} fill alt="Un gatito bien bonito" className="object-cover object-[70%] lg:object-[50%]"></Image>
      </div>
      <Carrusel activeIndex={0} />
      <Banner/>
      <Info/>
      <Stats/>
      <Banner2/>
    </>
  );
}
