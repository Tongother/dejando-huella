"use client";

import Carrusel from "../../../components/carrusel/Carrusel";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function DonationPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string | null>(null);

  const HandlerClickDonation = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const amount = 20; // Establece un monto fijo de donación

    setLoading(true);

    try {
      const { data } = await axios.post("/api/donacion/checkout", { amount });
      setUrl(data.url);
    } catch (error) {
      console.error("Error al generar el enlace de Mercado Pago", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Carrusel />

      <article className="flex w-full aspect-[16/8] relative">
        <Image src="/banner.png" alt="banner" fill />
      </article>

      <article className="w-full p-5 flex flex-col items-center lg:py-9 lg:px-5 lg:bg-[#F6F6FF]">
        <h1 className="font-ramm text-[#4C62D8] text-2xl lg:text-6xl">Donaciones</h1>
        <div className="w-full flex flex-col items-center lg:flex-row lg:gap-10 lg:px-[150px] lg:py-10">
          <div className="relative h-24 w-20 lg:h-[400px] lg:w-[450px]">
            <Image className="lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:rotate-3 lg:hover:scale-105" src="/gatitos/Minnie.png" alt="Minnie Cat" fill />
          </div>

          <div className="w-full mt-[-10px] pt-2 px-8 border-solid rounded-t-[30px] rounded-b-[10px] border-y-2 flex flex-col gap-2 lg:mt-0 lg:bg-white lg:rounded-[30px] lg:p-10">
            <h1 className="font-itim text-center font-medium text-2xl text-[#F6A700] lg:text-4xl lg:mb-5">Conviértete en un héroe</h1>

            <button
              onClick={HandlerClickDonation}
              className="shadow flex items-center rounded-3xl p-2 bg-[#F6F6FF] lg:basis-[170px] lg:grow lg:h-[170px] lg:flex-col lg:justify-center lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:scale-105 lg:hover:bg-[#dbdbe2]"
            >
              <div className="relative w-8 h-8 m-2 ml-3 mr-4 lg:w-[74px] lg:h-[73px]">
                <Image src="/icons/pet-food 3.png" alt="Comida para perro icono" fill />
              </div>
              <div>
                <h2 className="font-itim lg:text-xl lg:text-center">Donación única</h2>
                <h3 className="font-itim inline lg:block text-sm text-slate-600 lg:text-center lg:font-semibold lg:text-lg">$20</h3>
              </div>
            </button>

            <div className="mt-6 flex rounded-t-2xl gap-5 pr-3 lg:gap-5 justify-center lg:justify-end items-center">
              <div className="relative w-[60px] h-[16px] lg:w-[150px] lg:h-[40px]">
                <Image src="/Donativos/paypal.png" alt="Logo Paypal" fill />
              </div>
              <div className="relative w-[30px] h-[30px]">
                <Image src="/Donativos/mastercard.png" alt="Logo Mastercard" fill />
              </div>
            </div>
          </div>
        </div>
      </article>

      {loading && <p>Cargando...</p>}

      {url && !loading && (
        <div className="flex justify-center mt-4">
          <a href={url} target="_blank" rel="noopener noreferrer" className="bg-[#4C62D8] text-white py-2 px-6 rounded-3xl">
            Ir a Mercado Pago
          </a>
        </div>
      )}
    </section>
  );
}
