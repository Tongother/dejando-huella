import FondoIconos from "../components/items/banner";
import BotonSeleccion from "../components/adopciones/seleccion";
import HogarTemporal from "../components/adopciones/hogar_temporal";
import La_chona from "../../../public/perritos/La_chona.png";
import Minnie from "../../../public/gatitos/Minnie.png";

export default function Adopciones() {
  return (
    <>
      <div className="h-auto w-full">
        <FondoIconos>
          <div className="w-full lg:w-[50%] flex flex-col items-center">

            <h1 className="text-[30px] md:text-[48px] font-irish text-center text-[#F6A700]">ADOPTA A TU NUEVO MEJOR AMIGO</h1>

            <p className="font-inria text-black text-sm text-center">No puedes comprar amor, <span className="text-[#4C62D9] font-bold">pero puedes adoptarlo.</span></p>

            <div className="flex flex-col md:flex-row max-md:items-center md:justify-between mt-10 mb-5 w-[90%] max-sm:gap-10">
              <BotonSeleccion texto="Perritos" color="#FFB602" link="/perros" imagen={{ src:La_chona.src, width: 250, height: 260 }} />
              <BotonSeleccion texto="Gatitos" color="#4C62D9" link="/gatos" imagen={{ src:Minnie.src, width: 220, height: 210 }}/>
            </div>
            
            <p className="font-itim text-[#0f0f0f] text-sm text-center">Elige al peludito que más te guste y llena tu solicitud de adopción. Si haces el match perfecto, ¡nos vemos pronto en el refugio para conocerla en persona! <span className="text-[#4C62D9]">No olvides ser muy específico en tus respuestas para asegurar que seas el mejor adoptante.</span></p>
          
          </div>
        </FondoIconos>

        <HogarTemporal />
      </div>
    </>
  );
}