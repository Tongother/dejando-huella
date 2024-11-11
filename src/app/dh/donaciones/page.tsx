"use client";

import Carrusel from "../../../components/carrusel/Carrusel";
import Image from "next/image";
import { MercadoPagoButton } from "@/components/MercadoPagoButton/MercadoPagoButton";

export default function DonationPage() {
  const PrecioDonaciones = [50, 100, 200, 500];

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
            <Image
              className="lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:rotate-3 lg:hover:scale-105"
              src="/gatitos/Minnie.png"
              alt="Minnie Cat"
              fill
            />
          </div>

          <div className="w-full mt-[-10px] pt-2 px-8 border-solid rounded-t-[30px] rounded-b-[10px] border-y-2 flex flex-col gap-2 lg:mt-0 lg:bg-white lg:rounded-[30px] lg:p-10">
            <h1 className="font-itim text-center font-medium text-2xl text-[#F6A700] lg:text-4xl lg:mb-5">
              Conviértete en un héroe
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              {PrecioDonaciones.map((amount) => (
                <MercadoPagoButton key={amount} amount={amount} />
              ))}
            </div>
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
    </section>
  );
}
