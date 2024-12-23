import React, { useState, useEffect } from "react";
import { initMercadoPago} from '@mercadopago/sdk-react';
import axios from "axios";
import Image from 'next/image';

interface MercadoPagoButtonProps {
  amount: number;
}

export const MercadoPagoButton: React.FC<MercadoPagoButtonProps> = ({ amount }) => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  initMercadoPago(process.env.NEXT_MERCADO as string, {
    locale: "es-MX"
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
        title: 'Donación',
        quantity: 1,
        unit_price: amount,
        regreso: {
          success: "https://dejando-huella.vercel.app/dh/donaciones",
          failure: "https://dejando-huella.vercel.app/dh/donaciones",
          pending: "https://dejando-huella.vercel.app/dh/donaciones"
        },
        autoReturn: "approved"
      });
      
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    if (preferenceId) {
      window.location.href = `https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=${preferenceId}`;
    }
  }, [preferenceId]);

  return (
    <button
      onClick={handleBuy}
      className="shadow flex items-center rounded-3xl p-2 bg-[#F6F6FF] lg:basis-[170px] lg:grow lg:h-[170px] lg:flex-col lg:justify-center lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:scale-105 lg:hover:bg-[#dbdbe2]"
    >
      <div className="relative w-8 h-8 m-2 ml-3 mr-4 lg:w-[74px] lg:h-[73px]">
        <Image src="/icons/pet-food 3.png" alt="Comida para perro icono" fill />
      </div>
      <div>
        <h2 className="font-itim lg:text-xl lg:text-center">Donación</h2>
        <h3 className="font-itim inline lg:block text-sm text-slate-600 lg:text-center lg:font-semibold lg:text-lg">
          ${amount}
        </h3>
      </div>
    </button>
  );
};
