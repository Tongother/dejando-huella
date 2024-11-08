
import Formulario from "./voluntarios"
import FondoIconos from "../components/items/banner";

export default function Voluntarios() {
  return (
    <>
      <FondoIconos>
          <div className="h-auto w-full flex flex-col gap-10 z-10">
              <div className="w-full flex flex-col items-center ">
                  <h1 className="text-[30px] md:text-[48px] font-irish text-center text-[#F6A700]">Formulario para convertirte en voluntario</h1>

                  <p className="font-inria text-black text-sm text-justify  md:text-center mb-2">¡Gracias por tu interés en unirte como voluntario en la fundación &quot;Dejando Huella!&quot;</p>
                  
                  <p className="font-inria text-black text-sm text-justify md:text-center leading-4 mt-1">
                      Estamos buscando personas comprometidas que deseen apoyar nuestras actividades, ya sea en el cuidado de los animales,
                      la organización de eventos o la gestión diaria de nuestras instalaciones. Para asegurarnos de que tu perfil sea el adecuado
                      para nuestras necesidades, te pedimos que completes este formulario de manera honesta y detallada.
                  </p>           
              </div>
              <Formulario>

              </Formulario>
          </div>
      </FondoIconos>
    </>
  );
}
