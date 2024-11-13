import Banner from "../../components/banner/Banner";
import Stats from "../../components/stats";
import Banner2 from "../../components/banner2/Banner2";
import Carrusel from "../../components/carrusel/Carrusel";
import Info from "../../components/info";
import Image from  "next/image";
import { Suspense } from "react";

const SkeletonLoader = () => {
  return (
      <div className="w-full h-screen md:h-[90vh] flex justify-center items-center">
          <Image src="/gifts/gatito.gif" width={30} height={30} alt="Cargando..." quality={100} />
      </div>
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<SkeletonLoader/>}>
        <div className="fixed w-full h-full -z-10">
          <Image src={"/fondo_fijo.jpg"} fill alt="Un gatito bien bonito" className="object-cover object-[70%] lg:object-[50%]"></Image>
        </div>
        <Carrusel activeIndex={0} />
        <Banner/>
        <Info/>
        <Stats/>
        <Banner2/>
      </Suspense>
    </>
  );
}
