import Banner from "./components/banner/Banner";
import Stats from "./components/stats";
import Banner2 from "./components/banner2/Banner2";
import Carrusel from "./components/carrusel/Carrusel";
export default function Home() {
  return (
    <>
      <Carrusel/>
      <Banner/>
      <Banner2/>
      <Stats/>
    </>
  );
}
