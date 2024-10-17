import Info from "./components/info/info";
import Banner from "./components/banner/Banner";
import Stats from "./components/stats";
import Footer from "./components/footer/Footer";
import Banner2 from "./components/banner2/Banner2";
import Image from  "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed w-full h-full -z-10">
        <Image src={"/fondo_fijo.jpg"} fill alt="Un perro bien sarnoso" className="object-cover object-[70%] lg:object-[50%]"></Image>
      </div>
      <Banner/>
      <Info/>
      <Banner2/>
      <Stats/>
      <Footer/>
    </>
  );
}