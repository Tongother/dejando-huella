import Banner from "./components/banner/Banner";
import Stats from "./components/stats";
import Banner2 from "./components/banner2/Banner2";
import Image from  "next/image";
import Carrusel from "./components/carrusel/Carrusel";
import Info from "./components/info";

export default function Home() {
  return (
    <>
      <div className="fixed w-full h-full -z-10">
        <Image src={"/fondo_fijo.jpg"} fill alt="Un perro bien sarnoso" className="object-cover object-[70%] lg:object-[50%]"></Image>
      </div>
      <Carrusel/>
      <Banner/>
      <Info/>
      <Banner2/>
      <Stats/>
    </>
  );
}
