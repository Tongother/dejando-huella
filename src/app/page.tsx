import Info from "./components/info/info";
import Banner from "./components/banner/Banner";
import Stats from "./components/stats";
import Footer from "./components/footer/Footer";
import Banner2 from "./components/banner2/Banner2";

export default function Home() {
  return (
    <>
      <Banner/>
      <Info/>
      <Banner2/>
      <Stats/>
      <Footer>
      </Footer>
    </>
  );
}